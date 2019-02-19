import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { FaqPage } from '../pages/faq/faq';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;

  location: string;
  results: any;
  change: string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public geo: Geolocation, private iab: InAppBrowser) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.change="../assets/layout/FAB_logo.png"
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
