import { ZnajdzWMojejOkolicyPage } from './../about/znajdz-w-mojej-okolicy/znajdz-w-mojej-okolicy';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { KoszykowkaPage } from '../koszykowka/koszykowka'
import { Geolocation } from '@ionic-native/geolocation';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, private platform: Platform) {
  }

  ZnajdzWMojejOkolicy(){
    this.navCtrl.push(ZnajdzWMojejOkolicyPage);
  }

  koszykowkaNAV(){
    this.navCtrl.push(KoszykowkaPage);
  }

}
