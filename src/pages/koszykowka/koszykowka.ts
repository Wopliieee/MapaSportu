import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoiskoPage } from '../koszykowka/boisko/boisko';


@Component({
  selector: 'page-koszykowka',
  templateUrl: 'koszykowka.html'
})
export class KoszykowkaPage {

  constructor(public navCtrl: NavController) {

  }

  BoiskoPage(){
    this.navCtrl.push(BoiskoPage);
  }

}
