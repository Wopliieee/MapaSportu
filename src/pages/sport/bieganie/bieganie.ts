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
  selector: 'page-bieganie',
  templateUrl: 'bieganie.html',
})
export class BieganiePage {
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
  BieżnaokólnaPSP8: any;
  BieżniaokólnaPSP1: any;
  BieżniaPSP3: any;
  BieżniaPSP4: any;
  StadionMiejskiimKazimierzaDeynyOSiR: any;


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

    this.ObliczKilometry(53.957562, 18.527770, "BieżnaokólnaPSP8")
    this.ObliczKilometry(53.960856, 18.501134, "BieżniaokólnaPSP1")
    this.ObliczKilometry(53.975393, 18.531086, "BieżniaPSP3")
    this.ObliczKilometry(53.962934, 18.528891, "BieżniaPSP4")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR")

    
    const miejsca: Miejsce[] =[
      { odleglosc: this.BieżnaokólnaPSP8,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59909553_342572779786786_5778182085000822784_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=e8ce77ce1592485fb15b5d4f241000b4&oe=5D6E9E1C",
          zdjecie2: "../../assets/imgs/Bieżna okólna PSP8/2.jpg",
          zdjecie3: "../../assets/imgs/Bieżna okólna PSP8/3.jpg",

          Nazwa_Miejsca: "Bieżna PSP8",
          Adres: "Aleja Jana Pawła II 10",
          Kategoria_Miejsca: "Bieżnia okólna",
          Dyscyplina: "Bieganie",
          Nawierzchnia: "Żwir",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://psp8.edu.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},
      
      { odleglosc: this.BieżniaokólnaPSP1,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58442795_862091604128063_6053534620190769152_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=d933992706448d8a173ab4ada746d632&oe=5D300666",
          zdjecie2: "../../assets/imgs/Bieżnia okólna PSP1/2.jpg",
          zdjecie3: "../../assets/imgs/Bieżnia okólna PSP1/3.jpg",

          Nazwa_Miejsca: "Bieżnia PSP1",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Bieżnia okólna",
          Dyscyplina: "Bieganie",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'39.1%22N+18%C2%B030'04.1%22E/@53.9608591,18.4989453,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960856!4d18.501134"},
        
        { odleglosc: this.BieżniaPSP3,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59342885_1033387183522253_8032677557599993856_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=59befb3dcba4594c00937300b8065686&oe=5D6B80D0",
          zdjecie2: "../../assets/imgs/Bieżnia PSP3/2.jpg",
          zdjecie3: "../../assets/imgs/Bieżnia PSP3/3.jpg",

          Nazwa_Miejsca: "Bieżnia PSP3",
          Adres: "Wybickiego 17",
          Kategoria_Miejsca: "Bieżnia okólna",
          Dyscyplina: "Bieganie",
          Nawierzchnia: "Żwir",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'31.4%22N+18%C2%B031'51.9%22E/@53.9753961,18.5288973,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975393!4d18.531086"},
        
        { odleglosc: this.BieżniaPSP4,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58379740_837516659934749_2541356793565544448_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=dbb1d146e9eabcc7ad5ecedfd2def388&oe=5D61301D",
          zdjecie2: "../../assets/imgs/Bieżnia PSP4/2.jpg",
          zdjecie3: "../../assets/imgs/Bieżnia PSP4/3.jpg",

          Nazwa_Miejsca: "Bieżnia PSP4",
          Adres: "Aleja Jana Pawła II 4",
          Kategoria_Miejsca: "Bieżnia",
          Dyscyplina: "Bieganie",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
        
        { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59991981_384269932178332_8942460083111985152_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=9f63d09f071cd5c9ec77551e10a114a8&oe=5D5D1582",
          zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (9)/2.jpg",
          zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (9)/3.jpg",

          Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (9)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Bieżnia okólna (400m)",
          Dyscyplina: "Bieganie",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
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
    if(WYNIK == "BieżnaokólnaPSP8")
      this.BieżnaokólnaPSP8 = this.kilometry
    if(WYNIK == "BieżniaokólnaPSP1")
      this.BieżniaokólnaPSP1 = this.kilometry
    if(WYNIK == "BieżniaPSP3")
      this.BieżniaPSP3 = this.kilometry
    if(WYNIK == "BieżniaPSP4")
      this.BieżniaPSP4 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR")
      this.StadionMiejskiimKazimierzaDeynyOSiR = this.kilometry

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
