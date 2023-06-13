import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }
  getWeather(city:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b146869647d6adf34618e9a8c3bd805`)
  }
 
}

