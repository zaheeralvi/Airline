import { environment } from './../../environments/environment';
import { HotelService } from './hotel.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer } from '@angular/platform-browser';

const URL = `${environment.apiUrl}/uploads`;

@Component({
  selector: 'app-add-new-hotel',
  templateUrl: './add-new-hotel.component.html',
  styleUrls: ['./add-new-hotel.component.css']
})

export class AddNewHotelComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });

  postForm: FormGroup;
  imageUrl: any = '';
  uploadedFiles: Array<File>;
  constructor(private router: Router, private formBuilder: FormBuilder, private cd: ChangeDetectorRef, private hotelService: HotelService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.postForm = this.formBuilder.group({
      addHotelName: [''],
      addHotelRating: [''],
      addHotelCheckIN: [''],
      addHotelCheckOut: [''],
      addHotelAddress: [''],
      addHotelPostalCode: [''],
      addHotelCountry: [''],
      addHotelState: [''],
      addHotelCity: [''],
      addHotelWebsite: [''],
      addHotelDescription: [''],
      addHotelCoverImage: ['']
    });
    // this.postForm  = new FormGroup({
    //   'username': new FormControl({ value: 'a', disabled: true })
    // });
    this.uploader.onAfterAddingFile = (file) => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(file.file.rawFile)));
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      this.postForm.value.addHotelCoverImage = JSON.parse(status).path;
      console.log('Uploaded File Details:', status);
    };
  }

  backToAddHotel() {
    this.router.navigateByUrl('/hotels')
  }

  onSaveHotel() {
    this.hotelService.saveHotels(this.postForm.value).subscribe(result => {
      this.router.navigateByUrl('/hotels')
    })
  }
}
