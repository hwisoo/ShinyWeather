import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import { LocationSelectPage } from '../location-select/location-select';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location:{ 
  city: string;  
  state: string;
  }

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    private weatherProvider: WeatherProvider,
    private storage:Storage) {

  }
  launchLocationPage(){
 
    let modal = this.modalCtrl.create(LocationSelectPage);

    modal.onDidDismiss((location) => {
        console.log(location);
    });

    modal.present();   

}


  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null) {
        this.location = JSON.parse(val);
      } else {
          this.location = {
          city: 'Tacoma',
          state: 'WA'
         }
      }
   
      this.weatherProvider.getWeather(this.location.city, 
        this.location.state).subscribe(weather => {
      this.weather = weather.current_observation;
      });
    });
  }

  
}
