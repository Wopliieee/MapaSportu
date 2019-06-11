import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';

/**
 * Generated class for the PartnerzyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partnerzy',
  templateUrl: 'partnerzy.html',
})
export class PartnerzyPage {

  constructor(public navCtrl: NavController, private appAvailability: AppAvailability, public navParams: NavParams, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartnerzyPage');
  }

  strona(x){
    window.open(x, "_system", "location=yes")
  }

  facebook(x,y){
    // window.open("https://www.facebook.com/Mapa-Sportu-Starogard-Gda%C5%84ski-317553492174494/", "_system", "location=yes");

    let app;

    if (this.platform.is('ios')) {
      app = 'fb://';
    } else if (this.platform.is('android')) {
      app = 'com.facebook.katana';
    }

    if (app == 'fb://')
      this.appAvailability.check(app)
        .then(
          // (yes: boolean) => alert(app + ' is available'),
          // (no: boolean) => alert(app + ' is NOT available')
          (yes: boolean) => window.open("fb://page?id="+y, "_system", "location=yes"),
          (no: boolean) => window.open(x, "_system", "location=yes")
        );

    if (app == 'com.facebook.katana')
      this.appAvailability.check(app)
        .then(
          // (yes: boolean) => alert(app + ' is available'),
          // (no: boolean) => alert(app + ' is NOT available')
          (yes: boolean) => window.open("fb://facewebmodal/f?href="+x, "_system", "location=yes"),
          (no: boolean) => window.open(x, "_system", "location=yes")
        );
  }

}
