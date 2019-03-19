import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  zdj: any;

  @ViewChild('slider', { read: ElementRef })slider: ElementRef;
 
  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };
  img: any;
  backgroundImg: any;

  constructor(private screenOrientation: ScreenOrientation, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.zdj = navParams.get('zdj');
    
  }
  ngOnInit() {
    this.img = this.navParams.get('img');
  }


  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }



  rotate(){
    alert(this.screenOrientation.type)
    if (this.screenOrientation.type == "landscape-primary")
      alert("obrót")
  }

    
  

}
