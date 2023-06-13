import { Component, OnInit } from '@angular/core';
import { Weather } from './models/weather';
import { ApiService } from './services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weat=false
  weath:string=""
  img="https://i.pinimg.com/originals/c8/ea/05/c8ea057e5b33769d5027d8f8a2b45a23.gif"
  weatherdata?:Weather;

  constructor(private api:ApiService){}

  ngOnInit(): void {

  }
  getweth(){
    this.api.getWeather(this.weath).subscribe((res:any)=>{
      this.weat=true
         this.weatherdata=res
         if(res.main.temp<=301){
         this.img="https://cdn.wallpapersafari.com/89/32/qBUXso.gif"
         }
         else if(res.main.temp>=301 && res.main.temp>=311){
          this.img="https://media.tenor.com/aub6VgMv_RoAAAAM/desert-sky.gif"
         }
         else {
          this.img="https://goodmorningwallpapers.info/wp-content/uploads/2023/01/Good-Morning-Gif-Nature.gif"
         }
      
       })
  }
}