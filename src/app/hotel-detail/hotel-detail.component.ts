import { Component, OnInit } from '@angular/core';
import { HotelService } from '../add-new-hotel/hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  data:any={}
  constructor(private hotelService:HotelService,private route: ActivatedRoute) { }

  ngOnInit() {
    let path:any=this.route.params
    this.hotelService.getHotel(path.value.id).subscribe(results => {
      console.log(results)
      this.data = results.data[0];
    });
  }

}
