import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;


  constructor(public navCtrl: NavController) {
    

  }
}
