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
  selector: 'page-kregielnia',
  templateUrl: 'kregielnia.html',
})
export class KregielniaPage {
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
  KręgielniaKULA: any;
  CastleBowlingClub: any;
  BasenREN: any;
  KręgielniaREN: any;


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

    this.ObliczKilometry(53.969680, 18.530878, "KręgielniaKULA")
    this.ObliczKilometry(53.963851, 18.526420, "CastleBowlingClub")
    this.ObliczKilometry(53.975631, 18.520472, "KręgielniaREN")

    const miejsca: Miejsce[] =[
      { odleglosc: this.KręgielniaKULA,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285871_2502330279779467_4235989268947795968_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=def3eeca0b6b9b7c273fdeb58ca1e720&oe=5D2C0A7F",
          zdjecie2: "../../assets/imgs/Kręgielnia KULA/2.jpg",
          zdjecie3: "../../assets/imgs/Kręgielnia KULA/3.jpg",

          Nazwa_Miejsca: "Kręgielnia KULA",
          Adres: "Generała Józefa Hallera 16",
          Kategoria_Miejsca: "Kręgielnia",
          Dyscyplina: "Kręgle",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Czw.: 14:00 – 1:00 \n Sobota: 12:00 – 1:00 \n Niedziela: 14:00 – 23:00`,
          Koszt: `Kręgle \n Pon. - Czw.: 39zł/ h \n Pt. - Sob.: 49zł/ h \n Ndz.: 44zł/ h`,
          Strona_Internetowa: "http://kulabowling.pl/oferta/bowling/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'10.9%22N+18%C2%B031'51.2%22E/@53.9696831,18.5286893,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96968!4d18.530878"},
        
        { odleglosc: this.CastleBowlingClub,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59339687_2297341593823248_4056743322859864064_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=b2076750a488576d6e0fc6a1668aded8&oe=5D5B32CB",
          zdjecie2: "../../assets/imgs/Castle Bowling Club/2.jpg",
          zdjecie3: "../../assets/imgs/Castle Bowling Club/3.jpg",

          Nazwa_Miejsca: "Castle Bowling Club",
          Adres: "Lubichowska 7",
          Kategoria_Miejsca: "Kręgielnia",
          Dyscyplina: "Kręgle",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Czw.: 10:00 – 22:00 \n Pt. - Ndz.: 10:00 – 23:00`,
          Koszt: "1 tor: 35zł",
          Strona_Internetowa: "https://www.facebook.com/castle.stg/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.9%22N+18%C2%B031'35.1%22E/@53.9638541,18.5242313,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963851!4d18.52642"},
        
        { odleglosc: this.KręgielniaREN,

            zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59765368_401542173762240_7232559492913692672_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=b14b8952475534bbc7708e24eb88c8ae&oe=5D729ACF",
            zdjecie2: "../../assets/imgs/Kręgielnia REN/2.jpg",
            zdjecie3: "../../assets/imgs/Kręgielnia REN/3.jpg",
  
            Nazwa_Miejsca: "Kręgielnia REN",
            Adres: "Skarszewska 5",
            Kategoria_Miejsca: "Kręgielnia",
            Dyscyplina: "Kręgle",
            Nawierzchnia: "-",
            Godziny_Otwarcia:"pon. - czw. 12:00–23:00 \n pt. - sob. 12:00–01:00 \n niedz. - 12:00 - 22:00",
            Koszt: "Pon.-Czw. 45 zł/h \n Pt.-Sb. 55 zł/h \n Ndz. 45 zł/h",
            Strona_Internetowa: "http://ren.com.pl/bowling/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'32.3%22N+18%C2%B031'13.7%22E/@53.9756341,18.5182833,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975631!4d18.520472"},
            
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

    if(WYNIK == "KręgielniaKULA")
      this.KręgielniaKULA = this.kilometry
    if(WYNIK == "CastleBowlingClub")
      this.CastleBowlingClub = this.kilometry
    if(WYNIK == "KręgielniaREN")
      this.KręgielniaREN = this.kilometry
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