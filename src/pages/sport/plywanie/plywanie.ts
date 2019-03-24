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
  selector: 'page-plywanie',
  templateUrl: 'plywanie.html',
})
export class PlywaniePage {
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
  BasenPSP1: any;
  BasenREN: any;
  CentrumRehabilitacyjnoLeczniczeMEDPHARMA: any;


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

    this.ObliczKilometry(53.961617, 18.501317, "BasenPSP1")
    this.ObliczKilometry(53.975631, 18.520472, "BasenREN")
    this.ObliczKilometry(53.960680, 18.487117, "CentrumRehabilitacyjnoLeczniczeMEDPHARMA")

    const miejsca: Miejsce[] =[
      { odleglosc: this.BasenPSP1,

          zdjecie: "../../assets/imgs/Basen PSP1/1.jpg",
          zdjecie2: "../../assets/imgs/Basen PSP1/2.jpg",
          zdjecie3: "../../assets/imgs/Basen PSP1/3.jpg",

          Nazwa_Miejsca: "Basen PSP1",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Basen wewnętrzny",
          Dyscyplina: "Pływanie; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.
                                       16:00 - 21:15
                                       Sobota, Niedziela oraz dni świąteczne
                                       10:00 – 19:00`,
          Koszt: `	- dzieci, młodzież szkół podstawowych i gimnazjum – 6 zł.- osoby dorosłe - 14 zł.` ,
          Strona_Internetowa: "https://basenpsp1.wordpress.com/about/cennik/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.8%22N+18%C2%B030'04.7%22E/@53.9616201,18.4991283,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961617!4d18.501317"},
        

        { odleglosc: this.BasenREN,

          zdjecie: "../../assets/imgs/Basen REN/1.jpg",
          zdjecie2: "../../assets/imgs/Basen REN/2.jpg",
          zdjecie3: "../../assets/imgs/Basen REN/3.jpg",

          Nazwa_Miejsca: "Basen REN",
          Adres: "Skarszewska 5",
          Kategoria_Miejsca: "Basen wewnętrzny",
          Dyscyplina: "Pływanie; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. – Pt. 9:00 – 22:00
                                      Sob. – Ndz. 9:00 – 21:00`,
          Koszt: `Godz. 7:00 – 16:00 
               20 zł/ h BASEN + JACUZZI
               Godz. 16:00 – 22:00 
               25zł/ h BASEN + JACUZZI`,
          Strona_Internetowa: "http://ren.com.pl/basen-spa/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'32.3%22N+18%C2%B031'13.7%22E/@53.9756341,18.5182833,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975631!4d18.520472"},
        
        { odleglosc: this.CentrumRehabilitacyjnoLeczniczeMEDPHARMA,

          zdjecie: "../../assets/imgs/Centrum Rehabilitacyjno - Lecznicze MEDPHARMA/1.jpg",
          zdjecie2: "../../assets/imgs/Centrum Rehabilitacyjno - Lecznicze MEDPHARMA/2.jpg",
          zdjecie3: "../../assets/imgs/Centrum Rehabilitacyjno - Lecznicze MEDPHARMA/3.jpg",

          Nazwa_Miejsca: "Centrum Rehabilitacyjno - Lecznicze MEDPHARMA",
          Adres: "Leśna 1A",
          Kategoria_Miejsca: "Basen wewnętrzny",
          Dyscyplina: "Pływanie; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 7:00 – 22:00                                                                                                                                       
                                     Sob. - Ndz.: 8:00 – 22:00`,
          Koszt: `Cennik Zajęć Fitness:
                 Poranne ( 7:00 – 13:00) 15 zł/ 1 wejście
                 Wieczorne (13:00 – 22:00) 20 zł/ 1 wejście
                 Cennik Aqua Fitness:
                 25zł/ 1 wejście`,
          Strona_Internetowa: "http://fitness.medpharma.pl/oferta/cennik/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.5%22N+18%C2%B029'13.6%22E/@53.9606831,18.4849283,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96068!4d18.487117"},
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

    if(WYNIK == "BasenPSP1")
      this.BasenPSP1 = this.kilometry

    if(WYNIK == "BasenREN")
      this.BasenREN = this.kilometry

    if(WYNIK == "CentrumRehabilitacyjnoLeczniczeMEDPHARMA")
      this.CentrumRehabilitacyjnoLeczniczeMEDPHARMA = this.kilometry

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