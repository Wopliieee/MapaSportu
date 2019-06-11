import { CoToZaMiejscePage } from './../pages/co-to-za-miejsce/co-to-za-miejsce';
import { IntroPage } from './../pages/intro/intro';
import { PowietrzePage } from './../pages/powietrze/powietrze';
import { AnkietaPage } from './../pages/ankieta/ankieta';
import { RegulaminPage } from './../pages/regulamin/regulamin';
import { PartnerzyPage } from './../pages/partnerzy/partnerzy';
import { KontaktPage } from './../pages/kontakt/kontakt';
import { StoldogrywszachyPage } from './../pages/miejsca/stoldogrywszachy/stoldogrywszachy';
import { StoldogrywpingPongaPage } from './../pages/miejsca/stoldogrywping-ponga/stoldogrywping-ponga';
import { SkateparkPage } from './../pages/miejsca/skatepark/skatepark';
import { SilowniaplenerowaPage } from './../pages/miejsca/silowniaplenerowa/silowniaplenerowa';
import { SilowniaPage } from './../pages/miejsca/silownia/silownia';
import { SciankawspinaczkowaPage } from './../pages/miejsca/sciankawspinaczkowa/sciankawspinaczkowa';
import { SalagimnastycznaPage } from './../pages/miejsca/salagimnastyczna/salagimnastyczna';
import { LodowiskoPage } from './../pages/miejsca/lodowisko/lodowisko';
import { KregielniaPage } from './../pages/miejsca/kregielnia/kregielnia';
import { KlubsportowyPage } from './../pages/miejsca/klubsportowy/klubsportowy';
import { BoiskowielofunkcyjnePage } from './../pages/miejsca/boiskowielofunkcyjne/boiskowielofunkcyjne';
import { BoiskodotenisaziemnegoPage } from './../pages/miejsca/boiskodotenisaziemnego/boiskodotenisaziemnego';
import { BoiskodosiatkowkiplazowejPage } from './../pages/miejsca/boiskodosiatkowkiplazowej/boiskodosiatkowkiplazowej';
import { BoiskodosiatkowkiPage } from './../pages/miejsca/boiskodosiatkowki/boiskodosiatkowki';
import { BoiskodopilkirecznejPage } from './../pages/miejsca/boiskodopilkirecznej/boiskodopilkirecznej';
import { BoiskodopilkinoznejPage } from './../pages/miejsca/boiskodopilkinoznej/boiskodopilkinoznej';
import { BoiskodokoszykowkiPage } from './../pages/miejsca/boiskodokoszykowki/boiskodokoszykowki';
import { BiezniaPage } from './../pages/miejsca/bieznia/bieznia';
import { BasenPage } from './../pages/miejsca/basen/basen';
import { WspinaczkasciankowaPage } from './../pages/sport/wspinaczkasciankowa/wspinaczkasciankowa';
import { TenisziemnyPage } from './../pages/sport/tenisziemny/tenisziemny';
import { TenisstolowyPage } from './../pages/sport/tenisstolowy/tenisstolowy';
import { TaniecPage } from './../pages/sport/taniec/taniec';
import { SzachyPage } from './../pages/sport/szachy/szachy';
import { SportysilowePage } from './../pages/sport/sportysilowe/sportysilowe';
import { SportyekstremalnePage } from './../pages/sport/sportyekstremalne/sportyekstremalne';
import { SiatkowkaplazowaPage } from './../pages/sport/siatkowkaplazowa/siatkowkaplazowa';
import { SiatkowkaPage } from './../pages/sport/siatkowka/siatkowka';
import { PlywaniePage } from './../pages/sport/plywanie/plywanie';
import { LyzwiarstwoPage } from './../pages/sport/lyzwiarstwo/lyzwiarstwo';
import { LekkoatletykaPage } from './../pages/sport/lekkoatletyka/lekkoatletyka';
import { KreglePage } from './../pages/sport/kregle/kregle';
import { PilkanoznaPage } from './../pages/sport/pilkanozna/pilkanozna';
import { GoogleMapComponent } from './../components/google-map/google-map';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
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
import { PilkarecznaPage } from '../pages/sport/pilkareczna/pilkareczna';
import { PhotoPage } from '../pages/photo/photo';
import {ImageZoomModule} from 'angular2-image-zoom';
import { CommonModule } from '@angular/common';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { BieganiePage } from '../pages/sport/bieganie/bieganie';
import { CrossfitPage } from '../pages/sport/crossfit/crossfit';
import { FitnessPage } from '../pages/sport/fitness/fitness';
import { GimnastykaPage } from '../pages/sport/gimnastyka/gimnastyka';
import { SportywalkiPage } from '../pages/sport/sportywalki/sportywalki';
import { ObiektylekkoatletycznePage } from '../pages/miejsca/obiektylekkoatletyczne/obiektylekkoatletyczne';
import { ZgloszeniePage } from '../pages/zgloszenie/zgloszenie';

import { AppAvailability } from '@ionic-native/app-availability';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer';

import { FileOpener } from '@ionic-native/file-opener';
import { IonicStorageModule } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { EventsPage } from '../pages/events/events';

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

class ScreenOrientationMock extends ScreenOrientation {
  lock(type) {
    return new Promise((resolve, reject) => {
      resolve("locked");
    })
  }
}
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
    PilkarecznaPage,
    PhotoPage,
    BieganiePage,
    CrossfitPage,
    FitnessPage,
    GimnastykaPage,
    KreglePage,
    LekkoatletykaPage,
    LyzwiarstwoPage,
    PlywaniePage,
    SiatkowkaPage,
    SiatkowkaplazowaPage,
    SportyekstremalnePage,
    SportysilowePage,
    SportywalkiPage,
    SzachyPage,
    TaniecPage,
    TenisstolowyPage,
    TenisziemnyPage,
    WspinaczkasciankowaPage,

    BasenPage,
    BiezniaPage,
    BoiskodokoszykowkiPage,
    BoiskodopilkinoznejPage,
    BoiskodopilkirecznejPage,
    BoiskodosiatkowkiPage,
    BoiskodosiatkowkiplazowejPage,
    BoiskodotenisaziemnegoPage,
    BoiskowielofunkcyjnePage,
    KlubsportowyPage,
    KregielniaPage,
    LodowiskoPage,
    ObiektylekkoatletycznePage,
    SalagimnastycznaPage,
    SciankawspinaczkowaPage,
    SilowniaPage,
    SilowniaplenerowaPage,
    SkateparkPage,
    StoldogrywpingPongaPage,
    StoldogrywszachyPage,
    
    ZgloszeniePage,

    KontaktPage,
    PartnerzyPage,
    RegulaminPage,
    AnkietaPage,
    PowietrzePage,
    IntroPage,
    CoToZaMiejscePage,
    EventsPage

    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {

      tabsHideOnSubPages: true,
      
      }),
    IonicImageViewerModule,
    ionicGalleryModal.GalleryModalModule,
    ZoomAreaModule.forRoot(),
    IonicStorageModule.forRoot(),
    ZoomAreaModule,
    ImageZoomModule,
    CommonModule,
    HttpClientModule,
    HttpModule
    

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
    PilkarecznaPage,
    PhotoPage,
    BieganiePage,
    CrossfitPage,
    FitnessPage,
    GimnastykaPage,
    KreglePage,
    LekkoatletykaPage,
    LyzwiarstwoPage,
    PlywaniePage,
    SiatkowkaPage,
    SiatkowkaplazowaPage,
    SportyekstremalnePage,
    SportysilowePage,
    SportywalkiPage,
    SzachyPage,
    TaniecPage,
    TenisstolowyPage,
    TenisziemnyPage,
    WspinaczkasciankowaPage,
    
    BasenPage,
    BiezniaPage,
    BoiskodokoszykowkiPage,
    BoiskodopilkinoznejPage,
    BoiskodopilkirecznejPage,
    BoiskodosiatkowkiPage,
    BoiskodosiatkowkiplazowejPage,
    BoiskodotenisaziemnegoPage,
    BoiskowielofunkcyjnePage,
    KlubsportowyPage,
    KregielniaPage,
    LodowiskoPage,
    ObiektylekkoatletycznePage,
    SalagimnastycznaPage,
    SciankawspinaczkowaPage,
    SilowniaPage,
    SilowniaplenerowaPage,
    SkateparkPage,
    StoldogrywpingPongaPage,
    StoldogrywszachyPage,
    
    ZgloszeniePage,

    KontaktPage,
    PartnerzyPage,
    RegulaminPage,
    AnkietaPage,
    PowietrzePage,
    IntroPage,
    CoToZaMiejscePage,
    EventsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    PhotoViewer,
    Storage,
    LoadingController,
    AppAvailability,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: ScreenOrientation, useClass: ScreenOrientationMock },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig
    },
    InAppBrowser,
    ScreenOrientation,
    File,
    FileTransfer,
    DocumentViewer,
    FileOpener,
    HttpClient

  ]
})
export class AppModule {}

