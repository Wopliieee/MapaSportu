import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
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
  private images: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    for (let i = 1; i < 6; i++) {
      this.images.push({
        url: `assets/imgs/Boisko do koszykowki przy restauracji/zdj${i}.jpg`
      });
    }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoiskoPage');
  }

  open(x) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.images,
      initialSlide: x,
      closeIcon: 'back'
    });
    modal.present();
  }


}
