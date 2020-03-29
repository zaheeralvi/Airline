import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../airports.service';

@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.css']
})
export class SearchBookingComponent implements OnInit {

  to:'to'
  from:'from'
  airports:[]

  constructor( private airService:AirportsService ) {}

  ngOnInit() {
  }

  updateAirport(target){
    if(target.value!=''){
      console.log(this.airService.search(target.value))
    }
  }

}
