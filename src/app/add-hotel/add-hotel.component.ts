import { HotelService } from './../add-new-hotel/hotel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  hotels: any = [];
  constructor(private hotelService: HotelService, private router: Router) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(results => {
      this.hotels = results.data;
    });
  }
  addNewHotel() {
    this.router.navigate(['addNewHotel']);
  }

}