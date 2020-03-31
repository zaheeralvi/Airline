import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../airports.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.css']
})

export class SearchBookingComponent implements OnInit {

  to='to'
  from=''
  data=[]
  flights=[]
  airports:any=this.airService.airports

  constructor( private airService:AirportsService,private http: HttpClient ) {}

  ngOnInit() {
    this.data=this.airService.airports
  }

  updateAirport(value){
    if(value){
      this.airports=[]
      let result=this.airService.search(value)
      this.airports=this.airports.concat(result)
    }
  }
  searchFlights(){
    let param={
      "searchQuery": {
        "cabinClass": "ECONOMY",
        "paxInfo": {
          "ADULT": "1",
          "CHILD": "1",
          "INFANT": "0"
        },
        "routeInfos": [
          {
            "fromCityOrAirport": {
              "code": "DEL"
            },
            "toCityOrAirport": {
              "code": "MAA"
            },
            "travelDate": "2020-10-19"
          }
        ],
        "searchModifiers": {
          "isDirectFlight": true,
          "isConnectingFlight": false
        }
      }
    }
    let apikey='711431d46e828a-19de-458f-8519-b601990b6072'
    let headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'apikey': apikey
    });
    const httpOptions = {
      headers: headers_object
    };

    this.http.post(`${environment.host}/fms/v1/air-search-all`,param,httpOptions).subscribe((res:any)=>{
      this.flights=res.searchResult.tripInfos.ONWARD
      console.log(this.flights)
    })
  }

}
