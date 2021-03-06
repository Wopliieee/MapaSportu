import { PhotoPage } from './../../photo/photo';
import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OpisPage } from '../../opis/opis';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import "rxjs/add/operator/map";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule()
@Component({
  selector: 'page-szachy',
  templateUrl: 'szachy.html',
})
export class SzachyPage {
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

  
  lat555: any;
  imageViewerCtrl: ImageViewerController;
  informationPHOTO: any;
  ZDJECIE: any;
  ZDJECIE2: any;
  ZDJECIE3: any;
  LiveRefreshX: any;
  nawigacja: any;
  BoiskoOSIR: any;
  StółdogrywszachyNaOsMikołajaKopernika: any;
  StółdogrywszachynaOsPiastów: any;
  FLOWPARKStółszachowy: any;


  constructor(private screenOrientation: ScreenOrientation, private photoViewer: PhotoViewer, public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public geo: Geolocation, imageViewerCtrl: ImageViewerController, private iab: InAppBrowser) {
    
    this.imageViewerCtrl = imageViewerCtrl;
    
    this.lat5 = navParams.get('data');
    this.lon5 = navParams.get('data2');

  
    this.LiveRefresh()
    this.refresh()


    this.screenOrientation.onChange().subscribe(
      () => {
        this.refresh()
      }
   );
    
  } 

  ionViewWillEnter(){
    this.LiveRefreshX = 1
    console.log("wszedłem")
    setTimeout(() => 
    {
      this.refresh()
    },
    500); 
    setTimeout(() => 
    {
      this.refresh()
    },
    1000); 
    setTimeout(() => 
    {
      this.refresh()
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
          this.refresh()
          this.LiveRefresh()
        },
        5000); 
  }

  ViewPhoto(photo){
    this.informationPHOTO = photo
    this.navCtrl.push(PhotoPage, {zdj: this.informationPHOTO});
    }

  doRefresh(refresher) {
    this.test = Math.floor(Math.random() * 6) + 1  
    this.refresh()
    refresher.complete();
  }
  

  refresh(){

   {  
      let GeoOption = { enableHighAccuracy : true};
      try
      {
        this.wathID = this.geo.watchPosition(GeoOption).subscribe(data =>
          {
            this.wathID.unsubscribe();
            this.lat5 = data.coords.latitude;
            this.lon5 = data.coords.longitude; 
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

    this.ObliczKilometry(53.959797, 18.527130, "StółdogrywszachyNaOsMikołajaKopernika")
    this.ObliczKilometry(53.961923, 18.499315, "StółdogrywszachynaOsPiastów")
    this.ObliczKilometry(53.962796, 18.521749, "FLOWPARKStółszachowy")

    const miejsca: Miejsce[] =[
      { odleglosc: this.StółdogrywszachyNaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58463084_2409173205979236_706426531399860224_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=be0fe19977a9c754e329a5d9c0753bf4&oe=5D77131C",
          zdjecie2: "../../assets/imgs/Stół do gry w szachy na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w szachy na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Stół do gry w szachy na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 23",
          Kategoria_Miejsca: "Stół do gry w szachy ",
          Dyscyplina: "Szachy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'35.3%22N+18%C2%B031'37.7%22E/@53.9598001,18.5249413,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.959797!4d18.52713"},
        
        { odleglosc: this.StółdogrywszachynaOsPiastów,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58652574_603169466864774_2333531538089574400_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=7d643849df23c4c7045344e144f82338&oe=5D2B0581",
          zdjecie2: "../../assets/imgs/Stół do gry w szachy na Os. Piastów/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w szachy na Os. Piastów/3.jpg",

          Nazwa_Miejsca: "Stół do gry w szachy na Os. Piastów",
          Adres: "Os. Piastów 7",
          Kategoria_Miejsca: "Stół do gry w szachy",
          Dyscyplina: "Szachy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.9%22N+18%C2%B029'57.5%22E/@53.9619261,18.4971263,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961923!4d18.499315"},
        
        { odleglosc: this.FLOWPARKStółszachowy,

          // zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59394159_826680024375081_7449772829639180288_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=d2cea689758d69f81b9e571f50404ac9&oe=5D746483",
          // zdjecie2: "../../assets/imgs/FLOWPARK Stół szachowy/2.jpg",
          // zdjecie3: "../../assets/imgs/FLOWPARK Stół szachowy/3.jpg",
          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59394159_826680024375081_7449772829639180288_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=d2cea689758d69f81b9e571f50404ac9&oe=5D746483",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58833855_413084812608849_851623853665812480_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=558ab08d6873074bf344d204c468f2bb&oe=5D6B4089",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59397993_278103949736585_1378146845124984832_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=6cebe268adb97dacf75ecdd868ec6dcd&oe=5D311DE9",

          Nazwa_Miejsca: "FLOWPARK Stół szachowy",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 8",
          Kategoria_Miejsca: "Stół do gry w szachy (2)",
          Dyscyplina: "Szachy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 - 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.1%22N+18%C2%B031'18.3%22E/@53.9627991,18.5195603,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962796!4d18.521749"},
        ];

    const sortedByOdleglosc = miejsca.sort((a, b) => {
      // 1st property, sort by count
      if (a.odleglosc > b.odleglosc)
          return -1;
      if (a.odleglosc < b.odleglosc)
          return 1;
      return 0;
  });
  if(this.LiveRefreshX == 1)
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
    if(WYNIK == "StółdogrywszachyNaOsMikołajaKopernika")
      this.StółdogrywszachyNaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "StółdogrywszachynaOsPiastów")
      this.StółdogrywszachynaOsPiastów = this.kilometry
    if(WYNIK == "FLOWPARKStółszachowy")
      this.FLOWPARKStółszachowy = this.kilometry

  }

  PUSHOPIS(){
    this.navCtrl.push(OpisPage, {Nazwa_Miejsca: this.NazwaMiejsca, Dyscyplina: this.Dyscyplina,
      Kategoria_Miejsca: this.KategoriaMiejsca, Adres_Adres: this.Adres,
      Nawierzchnia: this.Nawierzchnia,
      Godziny_Otwarcia: this.GodzinyOtwarcia, Koszt_Koszt: this.Koszt, Strona_Internetowa: this.StronaInternetowa,
      zdjecie: this.ZDJECIE, zdjecie2: this.ZDJECIE2, zdjecie3: this.ZDJECIE3, Nawigacja: this.nawigacja});
    }

  OPIS(NM, D, KM, A, N, GO, K, SI, Z, Z2, Z3, NAW){
    this.NazwaMiejsca = NM
    this.Dyscyplina = D
    this.KategoriaMiejsca = KM
    this.Adres = A
    this.Nawierzchnia = N
    this.GodzinyOtwarcia = GO
    this.Koszt = K
    this.StronaInternetowa = SI
    this.ZDJECIE = Z
    this.ZDJECIE2 = Z2
    this.ZDJECIE3 = Z3
    this.nawigacja = NAW
    this.PUSHOPIS()
  }

  OpenUrl(url){
  const browser = this.iab.create(url);
  browser.show()
  }

}
