import { CoToZaMiejscePage } from './../pages/co-to-za-miejsce/co-to-za-miejsce';
import { IntroPage } from './../pages/intro/intro';
import { PowietrzePage } from './../pages/powietrze/powietrze';
import { AnkietaPage } from './../pages/ankieta/ankieta';
import { KontaktPage } from './../pages/kontakt/kontakt';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { FaqPage } from '../pages/faq/faq';

import { TabsPage } from '../pages/tabs/tabs';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ZgloszeniePage } from '../pages/zgloszenie/zgloszenie';
import { RegulaminPage } from '../pages/regulamin/regulamin';
import { PartnerzyPage } from '../pages/partnerzy/partnerzy';
import { Storage } from '@ionic/storage';

import { LoadingController } from 'ionic-angular';
import { EventsPage } from '../pages/events/events';
import { AppAvailability } from '@ionic-native/app-availability';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  

  location: string;
  results: any;
  change: string;
  statusBar: any;
  splashScreen: any;
  isApp: boolean;
  loader: any;
  intro: number;
  // rootPage: any = 'Tabs';

  constructor(private appAvailability: AppAvailability, public storage: Storage, public loadingCtrl: LoadingController, private alertController:AlertController, private screenOrientation: ScreenOrientation, private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public geo: Geolocation, private iab: InAppBrowser) {
    this.initializeApp();
    this.change="../assets/layout/FAB_logo.png"
    this.intro=0;
  }

  regulaminAndroid() {
    // this.nav.push(RegulaminPage);
    // window.open("https://drive.google.com/file/d/1wo2sWBKQM6w2PdZhaYvJFjxQTDUJ4N92/view", "_system", "location=yes")
    
    let regulaminAlert = this.alertController.create({
      title:"Regulamin",
      message:"Czy na pewno chcesz wyświetlić regulamin w oddzielnej aplikacji?",
      cssClass: 'alertDanger',
      buttons:[
        {
          text: 'Nie',
          cssClass: 'niebutton',
          handler: () => {
            console.log('No selected!');

          }
        },
        {
          text: 'Tak',
          cssClass: 'takbutton',
          handler: () => {
            window.open("https://drive.google.com/file/d/1szZ7OnxOetUKKRqANpEUVNqQdBMn3z7T/view", "_system", "location=yes")

          }
        }
        
      ]
    });
    regulaminAlert.present()
    
  }



  regulaminIOS() {
    // this.nav.push(RegulaminPage);
    // window.open("https://drive.google.com/file/d/1wo2sWBKQM6w2PdZhaYvJFjxQTDUJ4N92/view", "_system", "location=yes")
    
    let regulaminAlert = this.alertController.create({
      title:"Regulamin",
      message:"Czy na pewno chcesz wyświetlić regulamin w oddzielnej aplikacji?",
      cssClass: 'alertDangerIOS',
      buttons:[
        {
          text: 'Tak',
          cssClass: 'takbutton',
          handler: () => {
            window.open("https://drive.google.com/file/d/1szZ7OnxOetUKKRqANpEUVNqQdBMn3z7T/view", "_system", "location=yes")

          }
        },
        {
          text: 'Nie',
          cssClass: 'niebutton',
          handler: () => {
            console.log('No selected!');

          }
        }
        
      ]
    });
    regulaminAlert.present()
    
  }


  regulaminCheck(){
    if (this.platform.is('ios')) {
      this.regulaminIOS()
    } else if (this.platform.is('android')) {
      this.regulaminAndroid()
    }
  }


  ankieta() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSc1KFIR52pJSqv85zAO8FpeSlXixzDxF8B1dlYQG7_7fkrrQg/viewform?fbclid=IwAR08dtSubtLOPvFMpgfndt0YPiMBZ2lch09Uje_dwNLQeRXD_cTZ7qY1_Bc", "_system", "location=yes")
    // this.nav.push(AnkietaPage);
    // let regulaminAlert = this.alertController.create({
    //   title:"Ankieta",
    //   message:"Czy na pewno chcesz wyświetlić ankietę w oddzielnej aplikacji?",
    //   cssClass: 'alertDanger',
    //   buttons:[
    //     {
    //       text: 'Nie',
    //       cssClass: 'niebutton',
    //       handler: () => {
    //         console.log('No selected!');

    //       }
    //     },
    //     {
    //       text: 'Tak',
    //       cssClass: 'takbutton',
    //       handler: () => {
    //         window.open("https://docs.google.com/forms/d/e/1FAIpQLSc1KFIR52pJSqv85zAO8FpeSlXixzDxF8B1dlYQG7_7fkrrQg/viewform?fbclid=IwAR08dtSubtLOPvFMpgfndt0YPiMBZ2lch09Uje_dwNLQeRXD_cTZ7qY1_Bc", "_system", "location=yes")

    //       }
    //     }
        
    //   ]
    // });
    // regulaminAlert.present()
  }




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // lock the screen orientation
      // this.screenOrientation
      // .lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
      // .then(status => console.log(status))
      // .catch (e => console.log(e));
      });
  }


  FAQ() {
    this.nav.push(FaqPage);
  }
  zgloszenie() {
    this.nav.push(ZgloszeniePage);
  }
  kontakt() {
    this.nav.push(KontaktPage);
  }
  partnerzy() {
    this.nav.push(PartnerzyPage);
  }
  powietrze(){
    this.nav.push(PowietrzePage);
  }

  cotozamiejsce(){
    this.nav.push(CoToZaMiejscePage);
  }
  events(){
    this.nav.push(EventsPage);
  }


  Menu(){
    this.nav.push(HomePage);
  }
  

  SocialMedia(){
  if (this.change == "../assets/layout/FAB_logo.png")
    this.change = "../assets/layout/logoM.png"
  else if (this.change == "../assets/layout/logoM.png")
    this.change = "../assets/layout/FAB_logo.png"
  }

  OpenUrl(url){
    const browser = this.iab.create(url);
    browser.show()
    }

    presentLoading() {

      this.loader = this.loadingCtrl.create({
        content: "Authenticating..."
      });
  
      this.loader.present();
  
    }
  


}
