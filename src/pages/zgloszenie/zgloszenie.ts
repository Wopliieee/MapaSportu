import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ZgloszeniePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zgloszenie',
  templateUrl: 'zgloszenie.html',
})
export class ZgloszeniePage {
  subject="";
  body="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  send(){
    let Link = "mailto:mapasportu.zgloszenia@gmail.com?subject="+this.subject+"&body="+this.body+"";
    window.open(Link, "_system");
  }

}
