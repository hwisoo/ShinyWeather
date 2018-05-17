import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from '../../providers/weather/weather';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  weather: any;
  searchlocation: {
    city: string;
    state: string;
  }
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,
    private weatherProvider: WeatherProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
}
