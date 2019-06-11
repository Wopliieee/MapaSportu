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
  selector: 'page-boiskodotenisaziemnego',
  templateUrl: 'boiskodotenisaziemnego.html',
})
export class BoiskodotenisaziemnegoPage {
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
  MiejskaHalaSportowaImAndrzejaGrubbyOSiR: any;
  KortOSiR: any;
  KortTenisowyNaUlZblewskiej: any;
  BoiskoPSP3: any;
  PlaczabawFikumiku: any;


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

    this.ObliczKilometry(53.970017, 18.535273, "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.ObliczKilometry(53.970017, 18.535273, "KortOSiR")
    this.ObliczKilometry(53.961181, 18.500359, "KortTenisowyNaUlZblewskiej")
    this.ObliczKilometry(53.971949, 18.536903, "BoiskoPSP3")
    this.ObliczKilometry(53.973069, 18.542568, "PlaczabawFikumiku")

    const miejsca: Miejsce[] =[
      { odleglosc: this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58549574_2165665393528151_3939023251438567424_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=6f315a2d508caffb2e325af64b6e09c0&oe=5D71BF1B",
          zdjecie2: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/3.jpg",

          Nazwa_Miejsca: "Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Tenis ziemny; Piłka ręczna; Piłka nożna halowa; Sporty siłowe;Gimnastyka; Fitness",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "7:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
        
        { odleglosc: this.KortOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59394667_427932204451596_8106676558460092416_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=e4be9c58f303aca49692aa77dacbe633&oe=5D765928",
          zdjecie2: "../../assets/imgs/Kort (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Kort (OSiR)/3.jpg",

          Nazwa_Miejsca: "Kort (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Kort zewnętrzny ",
          Dyscyplina: "Tenis ziemny",
          Nawierzchnia: "Akryl/ Mączka ceglana",
          Godziny_Otwarcia: "7:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
        
        { odleglosc: this.KortTenisowyNaUlZblewskiej,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58462896_2389475004663226_4260594028485017600_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=907d908bc3da2df33ef2ab18b0e971c0&oe=5D70B66D",
          zdjecie2: "../../assets/imgs/Kort tenisowy na Ul.Zblewskiej/2.jpg",
          zdjecie3: "../../assets/imgs/Kort tenisowy na Ul.Zblewskiej/3.jpg",

          Nazwa_Miejsca: "Kort tenisowy na Ul.Zblewskiej",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Kort",
          Dyscyplina: "Tenis ziemny",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "Pon. - Ndz. \n 07:00 – 23:00",
          Koszt: `Pon. - Pt. \n 7:30 – 15:00 40zł/h \n 16:00 – 22:00 50zł/h \n Sob. - Ndz. \n 7:30 - 22:30 50zł/h`,
          Strona_Internetowa: "https://korty.org/starogard-gdanski",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'40.3%22N+18%C2%B030'01.3%22E/@53.9611841,18.4981703,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961181!4d18.500359"},
        
        { odleglosc: this.BoiskoPSP3,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58419539_547324022462986_348770298125877248_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=c255561e3bd14e6322f69a2c570e3786&oe=5D6E305E",
          zdjecie2: "../../assets/imgs/Boisko PSP3 (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP3 (3)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP3 (3)",
          Adres: "Traugutta 2",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Tenis ziemny",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatny/ Możliwość rezerwacji",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'19.0%22N+18%C2%B032'12.9%22E/@53.9719521,18.5347143,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971949!4d18.536903"},
        
          { odleglosc: this.PlaczabawFikumiku,

            zdjecie: '../../assets/imgs/Plac zabaw Fiku-miku/1.jpg',
            zdjecie2: '../../assets/imgs/Plac zabaw Fiku-miku/2.jpg',
            zdjecie3: '../../assets/imgs/Plac zabaw Fiku-miku/3.jpg',
  
            Nazwa_Miejsca: 'Plac zabaw "Fiku-miku"',
            Adres: "ul. Jana Buchholtza 6",
            Kategoria_Miejsca: "Boisko wielofunkcyjne",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Tartan",
            Godziny_Otwarcia: "6:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "-",
            Nawigacja: "https://www.google.pl/maps/place/Jana+Buchholza+6,+83-250+Starogard+Gdański/@53.9732109,18.5425676,17z/data=!4m5!3m4!1s0x47029c9a9b3ef00b:0x767aa42251651a23!8m2!3d53.9729004!4d18.5426218"},
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

    if(WYNIK == "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
      this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR = this.kilometry
    if(WYNIK == "KortOSiR")
      this.KortOSiR = this.kilometry
    if(WYNIK == "KortTenisowyNaUlZblewskiej")
      this.KortTenisowyNaUlZblewskiej = this.kilometry
    if(WYNIK == "BoiskoPSP3")
      this.BoiskoPSP3 = this.kilometry
    if(WYNIK == "PlaczabawFikumiku")
      this.PlaczabawFikumiku = this.kilometry
      
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