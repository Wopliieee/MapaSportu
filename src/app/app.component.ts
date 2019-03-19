import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { FaqPage } from '../pages/faq/faq';

import { TabsPage } from '../pages/tabs/tabs';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;

  location: string;
  results: any;
  change: string;
  statusBar: any;
  splashScreen: any;
  isApp: boolean;

  constructor(private screenOrientation: ScreenOrientation, private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public geo: Geolocation, private iab: InAppBrowser) {
    this.initializeApp();
    this.change="../assets/layout/FAB_logo.png"
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // lock the screen orientation
      // this.screenOrientation
      // .lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
      // .then(status => console.log(status))
      // .catch (e => console.log(e));
      });
  }


  FAQ() {
    this.nav.push(FaqPage);
  }
  Menu(){
    this.nav.push(HomePage);
  }

  SocialMedia(){
  if (this.change == "../assets/layout/FAB_logo.png")
    this.change = "../assets/layout/logoM.png"
  else if (this.change == "../assets/layout/logoM.png")
    this.change = "../assets/layout/FAB_logo.png"

  }

  OpenUrl(url){
    const browser = this.iab.create(url);
    browser.show()
    }


}
