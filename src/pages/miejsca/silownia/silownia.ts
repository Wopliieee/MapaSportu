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
  selector: 'page-silownia',
  templateUrl: 'silownia.html',
})
export class SilowniaPage {
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
  EbroGym: any;
  FitnessYankess: any;
  PumaKlubFitness: any;
  NeptunGym: any;


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

    this.ObliczKilometry(53.963387, 18.517096, "FitnessYankess")
    this.ObliczKilometry(53.964129, 18.527410, "PumaKlubFitness")
    this.ObliczKilometry(53.964124, 18.529760, "NeptunGym")

    const miejsca: Miejsce[] =[
          
        { odleglosc: this.FitnessYankess,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58805549_938616219825708_4349413904921657344_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=b06f6af85c3ed547ea6dd700373ba0e2&oe=5D729D68",
          zdjecie2: "../../assets/imgs/Fitness Yankess/2.jpg",
          zdjecie3: "../../assets/imgs/Fitness Yankess/3.jpg",

          Nazwa_Miejsca: "Fitness Yankess",
          Adres: "Orlińskiego 4",
          Kategoria_Miejsca: "Siłownia; Klub sportowy",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 8:00 – 22:00 \n Sobota: 9:00 – 15:00 \n Ndz.: 11:00 – 15:00`,
          Koszt: `1 wejście: 29zł \n Karnet 1 mies.: 100zł`,
          Strona_Internetowa: "http://yankes.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'48.2%22N+18%C2%B031'01.6%22E/@53.9633901,18.5149073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963387!4d18.517096"},

         { odleglosc: this.PumaKlubFitness,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58694245_2337184599852597_3738682320073261056_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=c02c714216ecf3c3ab2d067355d8ecc6&oe=5D62A957",
          zdjecie2: "../../assets/imgs/Puma Klub Fitness/2.jpg",
          zdjecie3: "../../assets/imgs/Puma Klub Fitness/3.jpg",

          Nazwa_Miejsca: "Puma Klub Fitness",
          Adres: "Pomorska 3",
          Kategoria_Miejsca: "Siłownia; Klub sportowy",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt: 7:30 – 21:00 \n Sobota: 8:00 – 17:00 \n Niedziela: 10:00 – 15:00`,
          Koszt: "129zł/ mies. \n 20zł/ 1 wejście",
          Strona_Internetowa: "http://www.pumaclub.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'38.7%22E/@53.9641321,18.5252213,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964129!4d18.52741"},

        { odleglosc: this.NeptunGym,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59295991_804161313276280_3266492666363248640_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=e5f3349492d1fdedfc726ad7a0b32cb2&oe=5D313ACF",
          zdjecie2: "../../assets/imgs/Neptun Gym/2.jpg",
          zdjecie3: "../../assets/imgs/Neptun Gym/3.jpg",

          Nazwa_Miejsca: "Neptun Gym",
          Adres: "Pomorska 7",
          Kategoria_Miejsca: "Siłownia; Klub sportowy",
          Dyscyplina: "Sporty siłowe; Fitness; Taniec",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 6:00 – 22:00 \n Sobota: 9:00 – 21:00 \n Niedziela: 9:00 – 20:00`,
          Koszt:`129zł/ mies. \n 25zł/ 1 wejście`,
          Strona_Internetowa: "http://neptungym.pl/cennik/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'47.1%22E/@53.9641271,18.5275713,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964124!4d18.52976"},

          
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

    if(WYNIK == "FitnessYankess")
      this.FitnessYankess = this.kilometry
    if(WYNIK == "PumaKlubFitness")
      this.PumaKlubFitness = this.kilometry
    if(WYNIK == "NeptunGym")
      this.NeptunGym = this.kilometry

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