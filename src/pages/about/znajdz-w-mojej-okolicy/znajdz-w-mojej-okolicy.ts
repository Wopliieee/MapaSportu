import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ZnajdzWMojejOkolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let cordova: any;

@IonicPage()
@Component({
  selector: 'page-znajdz-w-mojej-okolicy',
  templateUrl: 'znajdz-w-mojej-okolicy.html',
})
export class ZnajdzWMojejOkolicyPage {
  InAppBrowser: any;
  location: any;

  message: any;
  lat: any;
  lon: any;
  wathID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private inAppBrowser: InAppBrowser, public geo: Geolocation) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZnajdzWMojejOkolicyPage');
  }
  

  koszykowkaOKOLICA(url) 
  {  
    let GeoOption = { enableHighAccuracy : true};
    try
    {
      this.wathID = this.geo.watchPosition(GeoOption).subscribe(data =>
        {
          this.wathID.unsubscribe();
          this.lat = data.coords.latitude;
          this.lon = data.coords.longitude;
          const browser = this.inAppBrowser.create('https://www.google.pl/maps/search/'+(url)+'/@'+(data.coords.latitude)+(',')+(data.coords.longitude)+(',')+('12.25z'), '_system', 'location=yes')
        },
        error =>
        {
          this.message = "GPS error " + error;
        }
      );
      }catch(err)
      {
        alert("error " + err);
        this.message = "error " + err;
      }
    }



}
