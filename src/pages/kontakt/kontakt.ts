import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';

/**
 * Generated class for the KontaktPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kontakt',
  templateUrl: 'kontakt.html',
})
export class KontaktPage {

  constructor(public navCtrl: NavController, private appAvailability: AppAvailability, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KontaktPage');
  }

  email(){
    let Link = "mailto:mapasportu2018@gmail.com?subject=&body=";
    window.open(Link, "_system");
  }

  zwolnienizteorii(){
    window.open("https://zwolnienizteorii.pl/a/#/app/community/p/1021002", "_system", "location=yes")
  }

  instagram(){
    // window.open("https://www.instagram.com/mapa.sportu/?fbclid=IwAR22_Kxz1GoM5ypGRMN6-vGIM8-2K-LUMj5I6nX3oDo-T7gUho3sFOUfnyQ", "_system", "location=yes");

    let app;

    if (this.platform.is('ios')) {
      app = 'instagram://';
    } else if (this.platform.is('android')) {
      app = 'com.instagram.android';
    }


    if (app == 'fb://')
      this.appAvailability.check(app)
        .then(
          // (yes: boolean) => alert(app + ' is available'),
          // (no: boolean) => alert(app + ' is NOT available')
          (yes: boolean) => window.open("instagram://user?username=mapa.sportu", "_system", "location=yes"),
          (no: boolean) => window.open("https://www.instagram.com/mapa.sportu/", "_system", "location=yes")
        );

    if (app == 'com.facebook.katana')
      this.appAvailability.check(app)
        .then(
          // (yes: boolean) => alert(app + ' is available'),
          // (no: boolean) => alert(app + ' is NOT available')
          (yes: boolean) => window.open("instagram://user?username=mapa.sportu", "_system", "location=yes"),
          (no: boolean) => window.open("https://www.instagram.com/mapa.sportu/", "_system", "location=yes")
        );
  }




  facebook(){
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
          (yes: boolean) => window.open("fb://page?id=317553492174494", "_system", "location=yes"),
          (no: boolean) => window.open("https://www.facebook.com/Mapa-Sportu-Starogard-Gda%C5%84ski-317553492174494/", "_system", "location=yes")
        );

    if (app == 'com.facebook.katana')
      this.appAvailability.check(app)
        .then(
          // (yes: boolean) => alert(app + ' is available'),
          // (no: boolean) => alert(app + ' is NOT available')
          (yes: boolean) => window.open("fb://facewebmodal/f?href=https://www.facebook.com/Mapa-Sportu-Starogard-Gda%C5%84ski-317553492174494/", "_system", "location=yes"),
          (no: boolean) => window.open("https://www.facebook.com/Mapa-Sportu-Starogard-Gda%C5%84ski-317553492174494/", "_system", "location=yes")
        );
  }

}
