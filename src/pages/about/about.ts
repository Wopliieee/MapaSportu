import { PilkarecznaPage } from './../sport/pilkareczna/pilkareczna';
import { BoiskoPage } from './../miejsca/boisko/boisko';
import { PilkanoznaPage } from './../sport/pilkanozna/pilkanozna';
import { ZnajdzWMojejOkolicyPage } from './../about/znajdz-w-mojej-okolicy/znajdz-w-mojej-okolicy';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { KoszykowkaPage } from '../sport/koszykowka/koszykowka'
import { Geolocation } from '@ionic-native/geolocation';




@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  galleryType = 'regular';
  InAppBrowser: any;
  location: any;

  message: any;
  lat: any;
  lon: any;
  wathID: any;
  page = "page1";

  // this.lat = data.coords.latitude;
  // this.lon = data.coords.longitude;
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, private platform: Platform) {
    this.platform.ready().then(() =>{
      var options = {
        timeout: 5000
      };
      this.geo.getCurrentPosition(options).then(resp => {
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
      }).catch(() => {
        console.log("Error to get location");
      });

    });
    
  }

  ZnajdzWMojejOkolicy(){
    this.navCtrl.push(ZnajdzWMojejOkolicyPage);
  }

  koszykowkaNAV(){
    this.navCtrl.push(KoszykowkaPage, {data: this.lat, data2: this.lon});
  }

  pilkanoznaNAV(){
   this.navCtrl.push(PilkanoznaPage, {data: this.lat, data2: this.lon}) 
  }

  pilkarecznaNAV(){
    this.navCtrl.push(PilkarecznaPage, {data: this.lat, data2: this.lon}) 
   }

  boiskoNAV(){
    this.navCtrl.push(BoiskoPage, {data: this.lat, data2: this.lon}) 
   }

}
