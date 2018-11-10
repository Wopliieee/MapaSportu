import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KoszykowkaPage } from '../koszykowka/koszykowka'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  koszykowkaNAV(){
    this.navCtrl.push(KoszykowkaPage);
  }

}
