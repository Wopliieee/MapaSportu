import { AboutPage } from './../about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ZnajdzWMojejOkolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-znajdz-w-mojej-okolicy',
  templateUrl: 'znajdz-w-mojej-okolicy.html',
})
export class ZnajdzWMojejOkolicyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, private platform: Platform) {
    this.platform.ready().then(() => {
      this.geo.getCurrentPosition().then(resp => {
        alert("Pomyśle znalezionio twoją lokalizację! Pamiętaj że wyszukiwanie w okolicy nie jest do końca dokładne lecz pokazuje większość.")
      }).catch(() => {
        alert("Nie mogę zlokalizować twojego położenia :(")
        this.navCtrl.push(AboutPage);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZnajdzWMojejOkolicyPage');
  }

  koszykowkaOKOLICA() {
      this.platform.ready().then(() => {
        this.geo.getCurrentPosition().then(resp => {
          console.log(resp.coords.latitude);
          console.log(resp.coords.longitude);
          window.open('https://www.google.pl/maps/search/boisko+do+koszykówki/@'+(resp.coords.latitude)+(',')+(resp.coords.longitude)+(',')+('12.25z'))
        }).catch(() => {
          alert("Nie mogę zlokalizować twojego położenia :(")
          this.navCtrl.push(AboutPage);
        });
      });
  }


}
