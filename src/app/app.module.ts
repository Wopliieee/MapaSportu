import { BoiskoPage } from './../pages/miejsca/boisko/boisko';
import { PilkanoznaPage } from './../pages/sport/pilkanozna/pilkanozna';
import { GoogleMapComponent } from './../components/google-map/google-map';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, HideWhen } from 'ionic-angular';
import { MyApp } from './app.component';

import { Geolocation } from '@ionic-native/geolocation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { KoszykowkaPage } from '../pages/sport/koszykowka/koszykowka';
import { ZnajdzWMojejOkolicyPage } from "../pages/about/znajdz-w-mojej-okolicy/znajdz-w-mojej-okolicy";
import { FaqPage } from "../pages/faq/faq";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'
import { ZoomAreaModule } from 'ionic2-zoom-area';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { OpisPage } from '../pages/opis/opis';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    KoszykowkaPage,
    ZnajdzWMojejOkolicyPage,
    FaqPage,
    OpisPage,
    GoogleMapComponent,
    PilkanoznaPage,
    BoiskoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {

      tabsHideOnSubPages: true,
      
      }),
    IonicImageViewerModule,
    ionicGalleryModal.GalleryModalModule,
    ZoomAreaModule.forRoot(),
    ZoomAreaModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    KoszykowkaPage,
    ZnajdzWMojejOkolicyPage,
    FaqPage,
    OpisPage,
    PilkanoznaPage,
    BoiskoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig
    },
    InAppBrowser
  ]
})
export class AppModule {}
