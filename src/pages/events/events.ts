import { PhotoPage } from './../photo/photo';
import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OpisPage } from '../opis/opis';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import "rxjs/add/operator/map";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  @ViewChild(Slides) slides: Slides;
  data: Observable<any>;

  _imageViewerCtrl: ImageViewerController;
  imageViewerCtrl: ImageViewerController;
  public items:any;
  LiveRefreshX: number;
  test: number;



  constructor(private screenOrientation: ScreenOrientation, private photoViewer: PhotoViewer, public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public geo: Geolocation, imageViewerCtrl: ImageViewerController, private iab: InAppBrowser) {
    
    this.imageViewerCtrl = imageViewerCtrl;
    this.loadData();
  
    this.LiveRefresh()
    // this.refresh()


    this.screenOrientation.onChange().subscribe(
      () => {
        // this.refresh()
        this.loadData();
      }
   );
    
  } 
  loadData(){
    // let data:Observable<any>;
    // this.http.get('https://jsonplaceholder.typicode.com/albums');
    // data.subscribe(result => {
    //   this.items = result;
    // })
    fetch('https://raw.githubusercontent.com/Wopliieee/MapaSportu_Events/master/events.json')
      .then(response => response.json())
      .then(json => this.items = json)
      
  }


  ionViewWillEnter(){
    this.LiveRefreshX = 1
    console.log("wszedłem")
    setTimeout(() => 
    {
      // this.refresh()
      this.loadData();
    },
    500); 
    setTimeout(() => 
    {
      // this.refresh()
      this.loadData();
    },
    1000); 
    setTimeout(() => 
    {
      // this.refresh()
      this.loadData();
    },
    1000); 
  }

  ionViewWillLeave(){
    this.LiveRefreshX = 0
    console.log("wyszedłem")
  }

  LiveRefresh(){
      if(this.LiveRefreshX == 1)
        console.log("refreshed")
        setTimeout(() => 
        {
          // this.refresh()
          this.LiveRefresh()
        },
        5000); 
  }

  doRefresh(refresher) {
    this.test = Math.floor(Math.random() * 6) + 1  
    // this.refresh()
    this.loadData();
    refresher.complete();
  }

  openweb(x){
    window.open(x, "_system", "location=yes")
  }


}
