import { KreglePage } from './../sport/kregle/kregle';
import { LekkoatletykaPage } from './../sport/lekkoatletyka/lekkoatletyka';
import { LyzwiarstwoPage } from './../sport/lyzwiarstwo/lyzwiarstwo';
import { PilkanoznaPage } from './../sport/pilkanozna/pilkanozna';
import { PilkarecznaPage } from './../sport/pilkareczna/pilkareczna';
import { PlywaniePage } from './../sport/plywanie/plywanie';
import { SiatkowkaPage } from './../sport/siatkowka/siatkowka';
import { SiatkowkaplazowaPage } from './../sport/siatkowkaplazowa/siatkowkaplazowa';
import { SportyekstremalnePage } from './../sport/sportyekstremalne/sportyekstremalne';
import { SportysilowePage } from './../sport/sportysilowe/sportysilowe';
import { SportywalkiPage } from './../sport/sportywalki/sportywalki';
import { SzachyPage } from './../sport/szachy/szachy';
import { TaniecPage } from './../sport/taniec/taniec';
import { TenisstolowyPage } from './../sport/tenisstolowy/tenisstolowy';
import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { KoszykowkaPage } from '../sport/koszykowka/koszykowka'
import { BieganiePage } from '../sport/bieganie/bieganie';
import { FitnessPage } from '../sport/fitness/fitness';
import { GimnastykaPage } from '../sport/gimnastyka/gimnastyka';
import { WspinaczkasciankowaPage } from '../sport/wspinaczkasciankowa/wspinaczkasciankowa';
import { TenisziemnyPage } from '../sport/tenisziemny/tenisziemny';
import { Geolocation } from '@ionic-native/geolocation';

import { Storage } from '@ionic/storage';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  @ViewChild('filtry', {read: ElementRef}) filtry;
  @ViewChild('close', {read: ElementRef}) close;
  map: any;
  pasekHEIGHT: string;
  x: any;
  y: number;
  currentMAP: any;

  message: any;
  lat: any;
  lon: any;
  wathID: any;
  element:HTMLElement;
  tutorial: any;
  start: any;
  intro: number;
  test: any;
  cookie: any;

  constructor(public storage: Storage, private geo: Geolocation, public renderer: Renderer, public navCtrl: NavController, public navParams: NavParams,private platform: Platform) {
    this.currentMAP = "Bieganie"
    this.x = 0;
    this.tutorial = 0;
    this.start="true";
    this.test = "true";

    
    this.cookie=0;
    
 
    this.storage.get('cookie').then((val) => {
      console.log('Count of the cookie: ', val);
      if(this.cookie>=0)
        this.cookie=val;
      else
        console.log("e")
    });

    setTimeout(() => 
    {
      if(this.cookie<=1)
        this.navCtrl.push(IntroPage);
      this.clicker()
    },
    2000); 
    setTimeout(() => 
    {
      if(this.cookie<=1)
        this.navCtrl.push(IntroPage);
      this.clicker()
    },
    2000); 
    setTimeout(() => 
    {
      if(this.cookie<=1)
        this.navCtrl.push(IntroPage);
      this.clicker()
    },
    2000); 
    
    // this.storage.get('tutorial').then((val) => {
    //   console.log('Tutorial data: ', val);
    //   this.tutorial = val;
    //   if(val=='false2')
    //     // console.log("tutorial open");
    //     this.navCtrl.push(IntroPage);
    //     this.storage.set('tutorial', 'false3');
        
      
    // });

    

    {  
      let GeoOption = { enableHighAccuracy : true};
      try
      {
        this.wathID = this.geo.watchPosition(GeoOption).subscribe(data =>
          {
            this.wathID.unsubscribe();
            this.lat = data.coords.latitude;
            this.lon = data.coords.longitude; 
            },
          error =>
          {
            this.message = "GPS error " + error;
          }
        );
        }catch(err)
        {
          alert("error " + err);
          this.message = "error " + err;
        }
      }

  }
  clicker(){
    this.cookie++;
    console.log(this.cookie);
 
    this.storage.set('cookie', this.cookie);


   
  }
  ionViewDidLoad() { 
    setTimeout(() => 
    {
      if(this.cookie<=1)
        this.navCtrl.push(IntroPage);
      this.clicker()
    },
    2000); 
    setTimeout(() => 
    {
      if(this.cookie<=1)
        this.navCtrl.push(IntroPage);
      this.clicker()
    },
    2000); 
    setTimeout(() => 
    {
      if(this.cookie<=1)
        this.navCtrl.push(IntroPage);
      this.clicker()
    },
    2000); 
  }
  ionViewDidEnter() { 
    // this.clicker(); 
    // // this.storage.set('tutorial', 'true');
    // console.log("główna");
    // this.storage.get('tutorial').then((val) => {
    //   console.log('Tutorial data: ', val);
    //   if(val=='true')
    //     this.navCtrl.push(IntroPage);
    //   if(val=='true')
    //     this.storage.set('tutorial', 'false');
    //   });
    // this.tutorialINTRO()
    // this.storage.set('tutorial', 'false');
    // this.start = "false";
  }
  tutorialINTRO(){
    // this.storage.set('tutorial', 'true');
    console.log("główna");
    this.storage.get('tutorial').then((val) => {
      console.log('Tutorial data: ', val);
      if(val=='true')
        this.navCtrl.push(IntroPage);
      if(val=='true')
        this.start = "false";
      if(val=='true')
        this.storage.set('tutorial', this.start);
      if(val=='true')
        val = "false";
      });
  }
  refresh(){
    setTimeout(() => 
    {
      console.log("refresh");
          if (this.intro == 0)
            this.storage.set('intro', '1');
            this.storage.get('intro').then((val) => {
            console.log('Intro data: ', val);
            this.intro = 2;
            if(val==1)
              // console.log("tutorial open");
              this.navCtrl.push(IntroPage);
          });
    },
    2000); 
  }
  reset(){
    this.storage.set('cookie', '0');
 
    this.storage.get('cookie').then((val) => {
      console.log('Count of the cookie: ', val);
      if(this.cookie>=0)
        this.cookie=val;
       
      else
        this.cookie=0;
    });

    this.storage.set('cookie2', 0);
  }

  filtr(x,y){
    this.currentMAP = y
    // document.getElementById("myframe").src = x;
    document.getElementById('myframe').setAttribute( 'src', x );
  }

  zmiana(){
      this.x = this.x + 1

      this.y = this.x % 2;

      console.log(this.y)
      

      if(this.y == 1)
        this.renderer.setElementStyle(this.filtry.nativeElement, 'height', '90%');
      if(this.y == 1)
        this.renderer.setElementStyle(this.close.nativeElement, 'height', '10000px');
      if(this.y == 1)
        this.renderer.setElementStyle(this.close.nativeElement, 'width', '10000px');
      if(this.y == 1)
        this.renderer.setElementStyle(this.close.nativeElement, 'left', '-4970px');
      if(this.y == 1)
        this.renderer.setElementStyle(this.close.nativeElement, 'top', '-4970px');



      if(this.y == 0)
        this.renderer.setElementStyle(this.filtry.nativeElement, 'height', '65px');
      if(this.y == 0)
        this.renderer.setElementStyle(this.close.nativeElement, 'height', '100px');
      if(this.y == 0)
        this.renderer.setElementStyle(this.close.nativeElement, 'width', '100px');
      if(this.y == 0)
        this.renderer.setElementStyle(this.close.nativeElement, 'left', '-19px');
      if(this.y == 0)
        this.renderer.setElementStyle(this.close.nativeElement, 'top', '-19px');
  }

  sport() {
    // this.nav.push(KoszykowkaPage);
    if(this.currentMAP == "Bieganie")
      this.navCtrl.push(BieganiePage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Fitness")
      this.navCtrl.push(FitnessPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Gimnastyka")
      this.navCtrl.push(GimnastykaPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Koszykówka")
      this.navCtrl.push(KoszykowkaPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Kręgle")
      this.navCtrl.push(KreglePage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Lekkoatletyka")
      this.navCtrl.push(LekkoatletykaPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Łyżwiarstwo")
      this.navCtrl.push(LyzwiarstwoPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Piłka nożna")
      this.navCtrl.push(PilkanoznaPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Piłka ręczna")
      this.navCtrl.push(PilkarecznaPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Pływanie")
      this.navCtrl.push(PlywaniePage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Siatkówka")
      this.navCtrl.push(SiatkowkaPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Siatkówka plażowa")
      this.navCtrl.push(SiatkowkaplazowaPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Sporty ekstremalne")
      this.navCtrl.push(SportyekstremalnePage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Sporty siłowe")
      this.navCtrl.push(SportysilowePage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Sporty walki")
      this.navCtrl.push(SportywalkiPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Szachy")
      this.navCtrl.push(SzachyPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Taniec")
      this.navCtrl.push(TaniecPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Tenis stołowy")
      this.navCtrl.push(TenisstolowyPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Tenis ziemny")
      this.navCtrl.push(TenisziemnyPage, {data: this.lat, data2: this.lon});

    if(this.currentMAP == "Wspinaczka ściankowa")
      this.navCtrl.push(WspinaczkasciankowaPage, {data: this.lat, data2: this.lon});
  }

}