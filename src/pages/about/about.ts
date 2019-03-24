import { StoldogrywszachyPage } from './../miejsca/stoldogrywszachy/stoldogrywszachy';
import { StoldogrywpingPongaPage } from './../miejsca/stoldogrywping-ponga/stoldogrywping-ponga';
import { SkateparkPage } from './../miejsca/skatepark/skatepark';
import { SilowniaplenerowaPage } from './../miejsca/silowniaplenerowa/silowniaplenerowa';
import { SilowniaPage } from './../miejsca/silownia/silownia';
import { SciankawspinaczkowaPage } from './../miejsca/sciankawspinaczkowa/sciankawspinaczkowa';
import { SalagimnastycznaPage } from './../miejsca/salagimnastyczna/salagimnastyczna';
import { LodowiskoPage } from './../miejsca/lodowisko/lodowisko';
import { KregielniaPage } from './../miejsca/kregielnia/kregielnia';
import { KlubsportowyPage } from './../miejsca/klubsportowy/klubsportowy';
import { BoiskowielofunkcyjnePage } from './../miejsca/boiskowielofunkcyjne/boiskowielofunkcyjne';
import { BoiskodotenisaziemnegoPage } from './../miejsca/boiskodotenisaziemnego/boiskodotenisaziemnego';
import { BoiskodosiatkowkiplazowejPage } from './../miejsca/boiskodosiatkowkiplazowej/boiskodosiatkowkiplazowej';
import { BoiskodosiatkowkiPage } from './../miejsca/boiskodosiatkowki/boiskodosiatkowki';
import { BoiskodopilkirecznejPage } from './../miejsca/boiskodopilkirecznej/boiskodopilkirecznej';
import { BoiskodopilkinoznejPage } from './../miejsca/boiskodopilkinoznej/boiskodopilkinoznej';
import { BoiskodokoszykowkiPage } from './../miejsca/boiskodokoszykowki/boiskodokoszykowki';
import { BiezniaPage } from './../miejsca/bieznia/bieznia';
import { BasenPage } from './../miejsca/basen/basen';
import { TenisziemnyPage } from './../sport/tenisziemny/tenisziemny';
import { TenisstolowyPage } from './../sport/tenisstolowy/tenisstolowy';
import { SzachyPage } from './../sport/szachy/szachy';
import { SportywalkiPage } from './../sport/sportywalki/sportywalki';
import { SportysilowePage } from './../sport/sportysilowe/sportysilowe';
import { SportyekstremalnePage } from './../sport/sportyekstremalne/sportyekstremalne';
import { SiatkowkaplazowaPage } from './../sport/siatkowkaplazowa/siatkowkaplazowa';
import { SiatkowkaPage } from './../sport/siatkowka/siatkowka';
import { PlywaniePage } from './../sport/plywanie/plywanie';
import { LyzwiarstwoPage } from './../sport/lyzwiarstwo/lyzwiarstwo';
import { KreglePage } from './../sport/kregle/kregle';
import { FitnessPage } from './../sport/fitness/fitness';
import { CrossfitPage } from './../sport/crossfit/crossfit';
import { PilkarecznaPage } from './../sport/pilkareczna/pilkareczna';
import { PilkanoznaPage } from './../sport/pilkanozna/pilkanozna';
import { ZnajdzWMojejOkolicyPage } from './../about/znajdz-w-mojej-okolicy/znajdz-w-mojej-okolicy';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { KoszykowkaPage } from '../sport/koszykowka/koszykowka'
import { Geolocation } from '@ionic-native/geolocation';
import { BieganiePage } from '../sport/bieganie/bieganie';
import { GimnastykaPage } from '../sport/gimnastyka/gimnastyka';
import { LekkoatletykaPage } from '../sport/lekkoatletyka/lekkoatletyka';
import { TaniecPage } from '../sport/taniec/taniec';
import { WspinaczkasciankowaPage } from '../sport/wspinaczkasciankowa/wspinaczkasciankowa';
import { ObiektylekkoatletycznePage } from '../miejsca/obiektylekkoatletyczne/obiektylekkoatletyczne';




@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  galleryType = 'regular';
  InAppBrowser: any;
  location: any;

  message: any;
  lat: any;
  lon: any;
  wathID: any;
  page = "page1";

  // this.lat = data.coords.latitude;
  // this.lon = data.coords.longitude;
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private geo: Geolocation, private platform: Platform) {
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

  ZnajdzWMojejOkolicy(){
    this.navCtrl.push(ZnajdzWMojejOkolicyPage);
  }


// ---------------DYSCYPLINY---------------- //

bieganieNAV(){
  this.navCtrl.push(BieganiePage, {data: this.lat, data2: this.lon});
}

crossfitNAV(){
  this.navCtrl.push(CrossfitPage, {data: this.lat, data2: this.lon});
}

fitnessNAV(){
  this.navCtrl.push(FitnessPage, {data: this.lat, data2: this.lon});
}

gimnastykaNAV(){
  this.navCtrl.push(GimnastykaPage, {data: this.lat, data2: this.lon});
}

koszykowkaNAV(){
  this.navCtrl.push(KoszykowkaPage, {data: this.lat, data2: this.lon});
}

kregleNAV(){
  this.navCtrl.push(KreglePage, {data: this.lat, data2: this.lon});
}

lekkoatletykaNAV(){
  this.navCtrl.push(LekkoatletykaPage, {data: this.lat, data2: this.lon});
}

lyzwiarstwoNAV(){
  this.navCtrl.push(LyzwiarstwoPage, {data: this.lat, data2: this.lon});
}

pilkanoznaNAV(){
 this.navCtrl.push(PilkanoznaPage, {data: this.lat, data2: this.lon}) 
}

pilkarecznaNAV(){
  this.navCtrl.push(PilkarecznaPage, {data: this.lat, data2: this.lon}) 
}

plywanieNAV(){
  this.navCtrl.push(PlywaniePage, {data: this.lat, data2: this.lon});
}

siatkowkaNAV(){
  this.navCtrl.push(SiatkowkaPage, {data: this.lat, data2: this.lon});
}

siatkowkaplazowaNAV(){
  this.navCtrl.push(SiatkowkaplazowaPage, {data: this.lat, data2: this.lon});
}

sportyekstremalneNAV(){
  this.navCtrl.push(SportyekstremalnePage, {data: this.lat, data2: this.lon});
}

sportysiloweNAV(){
  this.navCtrl.push(SportysilowePage, {data: this.lat, data2: this.lon});
}

sportywalkiNAV(){
  this.navCtrl.push(SportywalkiPage, {data: this.lat, data2: this.lon});
}

szachyNAV(){
  this.navCtrl.push(SzachyPage, {data: this.lat, data2: this.lon});
}

taniecNAV(){
  this.navCtrl.push(TaniecPage, {data: this.lat, data2: this.lon});
}

tenisstolowyNAV(){
  this.navCtrl.push(TenisstolowyPage, {data: this.lat, data2: this.lon});
}

tenisziemnyNAV(){
  this.navCtrl.push(TenisziemnyPage, {data: this.lat, data2: this.lon});
}

wspinaczkasciankowaNAV(){
  this.navCtrl.push(WspinaczkasciankowaPage, {data: this.lat, data2: this.lon});
}

// -----------------MIEJSCA------------------ //

basenNAV(){
  this.navCtrl.push(BasenPage, {data: this.lat, data2: this.lon});
}

biezniaNAV(){
  this.navCtrl.push(BiezniaPage, {data: this.lat, data2: this.lon});
}

boiskodokoszykowkiNAV(){
  this.navCtrl.push(BoiskodokoszykowkiPage, {data: this.lat, data2: this.lon});
}

boiskodopilkinoznejNAV(){
  this.navCtrl.push(BoiskodopilkinoznejPage, {data: this.lat, data2: this.lon});
}

boiskodopilkirecznejNAV(){
  this.navCtrl.push(BoiskodopilkirecznejPage, {data: this.lat, data2: this.lon});
}

boiskodosiatkowkiNAV(){
  this.navCtrl.push(BoiskodosiatkowkiPage, {data: this.lat, data2: this.lon});
}

boiskodosiatkowkiplazowejNAV(){
  this.navCtrl.push(BoiskodosiatkowkiplazowejPage, {data: this.lat, data2: this.lon});
}

boiskodotenisaziemnegoNAV(){
  this.navCtrl.push(BoiskodotenisaziemnegoPage, {data: this.lat, data2: this.lon});
}

boiskowielofunkcyjneNAV(){
 this.navCtrl.push(BoiskowielofunkcyjnePage, {data: this.lat, data2: this.lon}) 
}

klubsportowyNAV(){
  this.navCtrl.push(KlubsportowyPage, {data: this.lat, data2: this.lon}) 
}

kregielniaNAV(){
  this.navCtrl.push(KregielniaPage, {data: this.lat, data2: this.lon});
}

lodowiskoNAV(){
  this.navCtrl.push(LodowiskoPage, {data: this.lat, data2: this.lon});
}

obiektylekkoatletyczneNAV(){
  this.navCtrl.push(ObiektylekkoatletycznePage, {data: this.lat, data2: this.lon});
}

salagimnastycznaNAV(){
  this.navCtrl.push(SalagimnastycznaPage, {data: this.lat, data2: this.lon});
}

sciankawspinaczkowaNAV(){
  this.navCtrl.push(SciankawspinaczkowaPage, {data: this.lat, data2: this.lon});
}

silowniaNAV(){
  this.navCtrl.push(SilowniaPage, {data: this.lat, data2: this.lon});
}

silowniaplenerowaNAV(){
  this.navCtrl.push(SilowniaplenerowaPage, {data: this.lat, data2: this.lon});
}

skateparkNAV(){
  this.navCtrl.push(SkateparkPage, {data: this.lat, data2: this.lon});
}

stoldogrywpingpongaNAV(){
  this.navCtrl.push(StoldogrywpingPongaPage, {data: this.lat, data2: this.lon});
}

stoldogrywszachyNAV(){
  this.navCtrl.push(StoldogrywszachyPage, {data: this.lat, data2: this.lon});
}

}
