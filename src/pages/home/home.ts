import { Component} from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  change: string;

  constructor(platform: Platform, public navCtrl: NavController, private iab: InAppBrowser) {
}

}
