import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Geolocation } from '@ionic-native/geolocation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { KoszykowkaPage } from '../pages/koszykowka/koszykowka';
import { BoiskoPage } from '../pages/koszykowka/boisko/boisko';
import { ZnajdzWMojejOkolicyPage } from "../pages/about/znajdz-w-mojej-okolicy/znajdz-w-mojej-okolicy";
import { FaqPage } from "../pages/faq/faq";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser'

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'
import { ZoomAreaModule } from 'ionic2-zoom-area';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    KoszykowkaPage,
    BoiskoPage,
    ZnajdzWMojejOkolicyPage,
    FaqPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    BoiskoPage,
    ZnajdzWMojejOkolicyPage,
    FaqPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig
    },
    InAppBrowser
  ]
})
export class AppModule {}
