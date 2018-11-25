import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

/**
 * Generated class for the BoiskoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boisko',
  templateUrl: 'boisko.html',
})
export class BoiskoPage {

  images = ['zdj1.jpg', 'zdj2.jpg', 'zdj3.jpg', 'zdj4.jpg', 'zdj5.jpg']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoiskoPage');
  }

}
