import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
 
declare var Connection;
/*
  Generated class for the ConnectivityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectivityServiceProvider {

  onDevice: boolean;

  constructor(public http: HttpClient,
    public platform: Platform, public network: Network){
      this.onDevice = this.platform.is('cordova');
       
    console.log('Hello ConnectivityServiceProvider Provider');
    }

    isOnline(): boolean {
      if(this.onDevice && this.network.type){
        return this.network.type != 'none';
      } else {
        return navigator.onLine;
      }
    }
   
    isOffline(): boolean {
      if(this.onDevice && this.network.type){
        return this.network.type == 'none';
      } else {
        return !navigator.onLine;  
      }
    }
   
    watchOnline(): any {
      return this.network.onConnect();
    }
   
    watchOffline(): any {
      return this.network.onDisconnect();
    }

}
