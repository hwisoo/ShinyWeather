import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apikey = '45427c7e0221742e';
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' +this.apikey+'/conditions/q';
  }
  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res =>res.json());
  }
}
