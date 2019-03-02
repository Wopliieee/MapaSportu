import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OpisPage } from '../../opis/opis';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule()
@Component({
  selector: 'page-koszykowka',
  templateUrl: 'koszykowka.html'
})
export class KoszykowkaPage {
  @ViewChild(Slides) slides: Slides;
  data: Observable<any>;
  items: any;
  _imageViewerCtrl: ImageViewerController;
  test: any;

  kilometry: any;
  x1: any;
  y1: any;
  x2: any;
  y2: any;
  radian: any;
  odległość: any;

  message: any;
  wathID: any;
  
  lat2: number;
  lon2: number;
  lon5: any;
  lat5: any;

  NazwaMiejsca: any;
  Dyscyplina: any;
  KategoriaMiejsca: any;
  Adres: any;
  Nawierzchnia: any;
  GodzinyOtwarcia: any;
  Koszt: any;
  StronaInternetowa: any;

  results: any;

  
  BoiskoNaPiekiełkach: any;
  BoiskoNaOsiedluKonstytucji3Maja: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public geo: Geolocation, imageViewerCtrl: ImageViewerController, private iab: InAppBrowser) {
    
    this._imageViewerCtrl = imageViewerCtrl;
    
    this.lat5 = navParams.get('data');
    this.lon5 = navParams.get('data2');
        
    this.refresh()
  } 

  doRefresh(refresher) {
    this.test = Math.floor(Math.random() * 6) + 1  
    this.refresh()
    refresher.complete();
  }
  

  refresh(){
    this.platform.ready().then(() =>{
      var options = {
        timeout: 5000
      };
      this.geo.getCurrentPosition(options).then(resp => {
        this.lat5 = resp.coords.latitude;
        this.lon5 = resp.coords.longitude;
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
      }).catch(() => {
        console.log("Error to get location");
      });

    });

    this.ObliczKilometry(53.963750, 18.510056, "BoiskoNaOsiedluKonstytucji3Maja")
    this.ObliczKilometry(53.970762, 18.515613, "BoiskoNaPiekiełkach")


    interface Miejsce {
      odleglosc: any;
      zdjecie: string;
      zdjecie2: string;
      zdjecie3: string;

      Nazwa_Miejsca: string,
      Dyscyplina: string,
      Kategoria_Miejsca: string,
      Adres: string,
      Nawierzchnia: string,
      Godziny_Otwarcia: string,
      Koszt: string,
      Strona_Internetowa: string,
      
      Nawigacja: string,
    }


    const miejsca: Miejsce[] =[
      { odleglosc: this.BoiskoNaPiekiełkach,
          zdjecie: "../../assets/imgs/Boisko na Piekielkach/1.png",
          zdjecie2: "../../assets/imgs/Boisko na Piekielkach/2.png",
          zdjecie3: "../../assets/imgs/Boisko na Piekielkach/3.png",
        
          Nazwa_Miejsca: "Piekiełki.",
          Adres: "ul. Księdza Piotra Ściegiennego",
          Kategoria_Miejsca: "Boisko.",
          Dyscyplina: "Koszykówka.",
          Nawierzchnia: "Asfaltowa.",
          Godziny_Otwarcia: "24/7",
          Koszt: "Bezpłatne.",
          Strona_Internetowa: "-",
          Nawigacja: "https://goo.gl/maps/4rLtpASJ3512"},
      
      { odleglosc: this.BoiskoNaOsiedluKonstytucji3Maja,
          zdjecie: "../../assets/imgs/Osiedle Konstytucji 3 Maja/1.png",
          zdjecie2: "../../assets/imgs/Osiedle Konstytucji 3 Maja/2.png",
          zdjecie3: "../../assets/imgs/Osiedle Konstytucji 3 Maja/3.png",
        
          Nazwa_Miejsca: "Boisko na Osiedlu Konstytucji 3 maja.",
          Adres: "Osiedle Konstytucji 3 maja.",
          Kategoria_Miejsca: "Boisko wielofunkcyjne.",
          Dyscyplina: "Koszykówka.",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00-22:00.",
          Koszt: "Bezpłatne.",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.5%22N+18%C2%B030'36.2%22E/@53.9637468,18.5095028,19z/data=!3m1!4b1!4m14!1m7!4m6!1m0!1m3!2m2!1d18.5100513!2d53.9637463!3e0!3m5!1s0x0:0x0!7e2!8m2!3d53.9637464!4d18.5100499",},
          
    ];


    const sortedByOdleglosc = miejsca.sort((a, b) => {
      // 1st property, sort by count
      if (a.odleglosc > b.odleglosc)
          return -1;
      if (a.odleglosc < b.odleglosc)
          return 1;
      return 0;
  });
  
    console.log(sortedByOdleglosc.reverse())
    this.results = sortedByOdleglosc
  }



  ObliczKilometry(x2DATA, y2DATA, WYNIK){

    this.lat2 = this.lat5
    this.lon2 = this.lon5

    //Twoja lokalizacja

    // this.x1 = 53.966637;
    // this.y1 = 18.516873;
    this.x1 = this.lat5;
    this.y1 = this.lon5;

    //Lokalizacja danego miejsca
    this.x2 = x2DATA;
    this.y2 = y2DATA;

    //zamiana na radiany
    this.radian = (this.x1* Math.PI)/180;
    
    //obliczanie kilometrów
    this.odległość = Math.sqrt((this.x2 - this.x1)*(this.x2 - this.x1)+(Math.cos(this.radian)*(this.y2-this.y1)*(Math.cos(this.radian)*(this.y2-this.y1))))*111,3214
    

    //ostateczny wynik w kilometrach
    this.kilometry = Math.round(this.odległość*100)/100;
    if(WYNIK == "BoiskoNaOsiedluKonstytucji3Maja")
      this.BoiskoNaOsiedluKonstytucji3Maja = this.kilometry
    if(WYNIK == "BoiskoNaPiekiełkach")
      this.BoiskoNaPiekiełkach = this.kilometry

  }

  PUSHOPIS(){
    this.navCtrl.push(OpisPage, {Nazwa_Miejsca: this.NazwaMiejsca, Dyscyplina: this.Dyscyplina,
      Kategoria_Miejsca: this.KategoriaMiejsca, Adres_Adres: this.Adres,
      Nawierzchnia: this.Nawierzchnia,
      Godziny_Otwarcia: this.GodzinyOtwarcia, Koszt_Koszt: this.Koszt, Strona_Internetowa: this.StronaInternetowa});
    }

  OPIS(NM, D, KM, A, N, GO, K, SI){
    this.NazwaMiejsca = NM
    this.Dyscyplina = D
    this.KategoriaMiejsca = KM
    this.Adres = A
    this.Nawierzchnia = N
    this.GodzinyOtwarcia = GO
    this.Koszt = K
    this.StronaInternetowa = SI
    this.PUSHOPIS()
  }

  OpenUrl(url){
  const browser = this.iab.create(url);
  browser.show()
  }

}