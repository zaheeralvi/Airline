import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient, private router: Router) { }

  getHotels(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/hotels`);
  }

  saveHotels(hotelData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/hotels`, hotelData);
  }
  uploadImage(file:File): Observable<any> {
    let fd:FormData = new FormData();
    fd.append('file', file, file.name);
    return this.http.post(`${environment.apiUrl}/uploads`, fd);
  }
  
  getHotel(id): Observable<any> {
    return this.http.get(`${environment.apiUrl}/hotels/${id}`);
  }

}
