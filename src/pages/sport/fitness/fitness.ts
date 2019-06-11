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
  selector: 'page-fitness',
  templateUrl: 'fitness.html',
})
export class FitnessPage {
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
  EbroGym: any;
  FitnessYankess: any;
  FLOWPARKStreetworkoutPark: any;
  NeptunGym: any;
  PumaKlubFitness: any;
  SiłowniaplenerowaOSiR: any;
  SiłowniaplenerowanaOsKonstytucji3goMaja: any;
  SiłowniaplenerowanaOsMikołajaKopernika2: any;
  SiłowniaplenerowanaOsMikołajaKopernika: any;
  Leszczynowa2: any;
  SiłowniaplenerowaobokPolpharmy: any;
  SiłowniaplenerowaParkNoweOblicze: any;
  SiłowniaplenerowaprzyOsJurandazeSpychowa: any;
  SiłowniaplenerowaprzyulTraugutta: any;
  SiłowniaplenerowaprzyulicySzturmowskiego: any;
  SiłowniaplenerowawParkuRekreacyjnymAKUKU: any;
  StreetWorkoutParkprzyOsJurandazeSpychowa: any;
  KlubFalangaStarogard: any;
  SiłowniaplenerowaprzyplacuzabawFikumiku: any;
  SiłowniaplenerowaILO: any;
  SiłowniaplenerowaILO2: any;


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
    this.ObliczKilometry(53.963387, 18.517096, "FitnessYankess")
    this.ObliczKilometry(53.962796, 18.521749, "FLOWPARKStreetworkoutPark")
    this.ObliczKilometry(53.964124, 18.529760, "NeptunGym")
    this.ObliczKilometry(53.964129, 18.527410, "PumaKlubFitness")

// *------------------------------*//

    this.ObliczKilometry(53.970017, 18.535273, "SiłowniaplenerowaOSiR")
    this.ObliczKilometry(53.963727, 18.509962, "SiłowniaplenerowanaOsKonstytucji3goMaja")
    this.ObliczKilometry(53.958664, 18.527146, "SiłowniaplenerowanaOsMikołajaKopernika2")
    this.ObliczKilometry(53.961994, 18.527556, "SiłowniaplenerowanaOsMikołajaKopernika")
    this.ObliczKilometry(53.936062, 18.505666, "Leszczynowa2")
    this.ObliczKilometry(53.960612, 18.537954, "SiłowniaplenerowaobokPolpharmy")
    this.ObliczKilometry(53.962497, 18.531348, "SiłowniaplenerowaParkNoweOblicze")
    this.ObliczKilometry(53.961868, 18.506220, "SiłowniaplenerowaprzyOsJurandazeSpychowa")
    this.ObliczKilometry(53.977827, 18.537753, "SiłowniaplenerowaprzyulTraugutta")
    this.ObliczKilometry(53.961648, 18.492796, "SiłowniaplenerowaprzyulicySzturmowskiego")
    this.ObliczKilometry(53.982568, 18.502943, "SiłowniaplenerowawParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.962644, 18.505431, "StreetWorkoutParkprzyOsJurandazeSpychowa")
    this.ObliczKilometry(53.944776, 18.514056, "KlubFalangaStarogard")
    this.ObliczKilometry(53.973069, 18.542568, "SiłowniaplenerowaprzyplacuzabawFikumiku")
    this.ObliczKilometry(53.971245, 18.531742, "SiłowniaplenerowaILO")
    this.ObliczKilometry(53.970920, 18.531272, "SiłowniaplenerowaILO2")

    const miejsca: Miejsce[] =[
      { odleglosc: this.BasenPSP1,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59230021_2019338135029760_3833510632418705408_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=40cb7cf5d60b6015d2a33e2cb9f30f54&oe=5D2CC4F5",
          zdjecie2: "../../assets/imgs/Basen PSP1/2.jpg",
          zdjecie3: "../../assets/imgs/Basen PSP1/3.jpg",

          Nazwa_Miejsca: "Basen PSP1",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Basen wewnętrzny ",
          Dyscyplina: "Pływanie; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt. od 16:00 do 21:15 \n Sobota, Niedziela oraz dni świąteczne: 10:00 – 19:00 `,
          Koszt: `dzieci, młodzież szkół podstawowych i gimnazjum – 6 zł. \n osoby dorosłe - 14 zł. \n młodzież szkół średnich/studenci do 25 lat oraz osoby niepełnosprawne - 10 zł` ,
          Strona_Internetowa: "https://basenpsp1.wordpress.com/about/cennik/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.8%22N+18%C2%B030'04.7%22E/@53.9616201,18.4991283,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961617!4d18.501317"},
        
        { odleglosc: this.BasenREN,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59481801_654227601696436_6392134504479195136_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=505ea111e6ee1dacb352abf1840285d7&oe=5D301976",
          zdjecie2: "../../assets/imgs/Basen REN/2.jpg",
          zdjecie3: "../../assets/imgs/Basen REN/3.jpg",

          Nazwa_Miejsca: "Basen REN ",
          Adres: "Skarszewska 5 ",
          Kategoria_Miejsca: "Basen wewnętrzny ",
          Dyscyplina: "Pływanie; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. – Pt. 9:00 – 22:00 \n Sob. – Ndz. 9:00 – 21:00`,
          Koszt: `Godz. 7:00 – 16:00 20 zł/ h BASEN + JACUZZI  Godz. 16:00 – 22:00 25zł/ h BASEN + JACUZZI `,
          Strona_Internetowa: "http://ren.com.pl/basen-spa/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'32.3%22N+18%C2%B031'13.7%22E/@53.9756341,18.5182833,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975631!4d18.520472"},

        { odleglosc: this.CentrumRehabilitacyjnoLeczniczeMEDPHARMA,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/57434126_1202474393253299_9000471201356709888_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=929cd3cdd40275e16e4d063db7e32b55&oe=5D2A16B6",
          zdjecie2: "../../assets/imgs/Centrum Rehabilitacyjno - Lecznicze MEDPHARMA/2.jpg",
          zdjecie3: "../../assets/imgs/Centrum Rehabilitacyjno - Lecznicze MEDPHARMA/3.jpg",

          Nazwa_Miejsca: "Centrum Rehabilitacyjno - Lecznicze MEDPHARMA ",
          Adres: "Leśna 1A ",
          Kategoria_Miejsca: "Basen wewnętrzny ",
          Dyscyplina: "Pływanie; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 7:00 – 22:00 \n Sob. - Ndz.: 8:00 – 22:00 `,
          Koszt: `Cennik Zajęć Fitness \n Poranne ( 7:00 – 13:00) 15 zł/ 1 wejście \n Wieczorne (13:00 – 22:00) 20 zł/ 1 wejście \n Cennik Aqua Fitness \n 25zł/ 1 wejście \n Basen \n 7:00 - 20:00 - 20 zł/h \n 20:00 - 22:00 - 30 zł/h`,
          Strona_Internetowa: "http://fitness.medpharma.pl/oferta/cennik/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.5%22N+18%C2%B029'13.6%22E/@53.9606831,18.4849283,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96068!4d18.487117"},

        { odleglosc: this.FitnessYankess,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58805549_938616219825708_4349413904921657344_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=b06f6af85c3ed547ea6dd700373ba0e2&oe=5D729D68",
          zdjecie2: "../../assets/imgs/Fitness Yankess/2.jpg",
          zdjecie3: "../../assets/imgs/Fitness Yankess/3.jpg",

          Nazwa_Miejsca: "Fitness Yankess ",
          Adres: "Orlińskiego 4 ",
          Kategoria_Miejsca: "Siłownia; Klub sportowy ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 8:00 – 22:00 \n Sobota: 9:00 – 15:00  Ndz.: 11:00 – 15:00 `,
          Koszt: `1 wejście: 29zł  Karnet 1 mies.: 100zł `,
          Strona_Internetowa: "http://yankes.pl/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'48.2%22N+18%C2%B031'01.6%22E/@53.9633901,18.5149073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963387!4d18.517096"},

        { odleglosc: this.FLOWPARKStreetworkoutPark,

          // zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58626020_445450169534312_8730037945613942784_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=fd4cb09a1ca593c5510a0b685d051e8c&oe=5D76288F",
          // zdjecie2: "../../assets/imgs/FLOWPARK Streetworkout Park/2.jpg",
          // zdjecie3: "../../assets/imgs/FLOWPARK Streetworkout Park/3.jpg",
          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58626020_445450169534312_8730037945613942784_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=fd4cb09a1ca593c5510a0b685d051e8c&oe=5D76288F",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59422324_338099853514531_392767444889894912_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=aa23bf9447921b2aaa56c1636012bbd7&oe=5D601BB4",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59450348_315684459104302_6790683804278194176_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=26078831592a5ed8d40455ddaa6f7d46&oe=5D3054C9",

          Nazwa_Miejsca: "FLOWPARK Streetworkout Park ",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 8 ",
          Kategoria_Miejsca: "Streetworkout Park ",
          Dyscyplina: "Sporty siłowe; Kalistenika; Streetworkout ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 - 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.1%22N+18%C2%B031'18.3%22E/@53.9627991,18.5195603,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962796!4d18.521749"},

        { odleglosc: this.NeptunGym,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59295991_804161313276280_3266492666363248640_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=e5f3349492d1fdedfc726ad7a0b32cb2&oe=5D313ACF",
          zdjecie2: "../../assets/imgs/Neptun Gym/2.jpg",
          zdjecie3: "../../assets/imgs/Neptun Gym/3.jpg",

          Nazwa_Miejsca: "Neptun Gym ",
          Adres: "Pomorska 7 ",
          Kategoria_Miejsca: "Siłownia; Klub sportowy ",
          Dyscyplina: "Sporty siłowe; Fitness; Taniec ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 6:00 – 22:00 \n Sobota: 9:00 – 21:00  Niedziela: 9:00 – 20:00 `,
          Koszt: `129zł/ mies.  25zł/ 1 wejście`,
          Strona_Internetowa: "http://neptungym.pl/cennik/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'47.1%22E/@53.9641271,18.5275713,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964124!4d18.52976"},

        { odleglosc: this.PumaKlubFitness,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58694245_2337184599852597_3738682320073261056_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=c02c714216ecf3c3ab2d067355d8ecc6&oe=5D62A957",
          zdjecie2: "../../assets/imgs/Puma Klub Fitness/2.jpg",
          zdjecie3: "../../assets/imgs/Puma Klub Fitness/3.jpg",

          Nazwa_Miejsca: "Puma Klub Fitness ",
          Adres: "Pomorska 3 ",
          Kategoria_Miejsca: "Siłownia; Klub sportowy ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 7:30 – 21:00 \n Sobota: 8:00 – 17:00  Niedziela: 10:00 – 15:00 `,
          Koszt: `129zł/ mies.  20zł/ 1 wejście`,
          Strona_Internetowa: "http://www.pumaclub.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'38.7%22E/@53.9641321,18.5252213,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964129!4d18.52741"},

// ---------------------------------------------------------------------------
        
        { odleglosc: this.SiłowniaplenerowaOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58675168_872516803103258_2423911316583350272_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=4311ba37d40647393ffbfef9413f6dca&oe=5D6D40BB",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa (OSiR)/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa (OSiR) ",
          Adres: "Olimpijczyków Starogardzkich 1 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "Czynne całą dobę ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},

        { odleglosc: this.SiłowniaplenerowanaOsKonstytucji3goMaja,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58758461_352689748706404_2235948910461845504_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=fe56176ffd74a9c8ee28ea20d85ce22c&oe=5D738B3A",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Konstytucji 3-go Maja/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Konstytucji 3-go Maja/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Os. Konstytucji 3-go Maja ",
          Adres: "Os. Konstytucji 3-go Maja ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.4%22N+18%C2%B030'35.9%22E/@53.9637301,18.5077733,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963727!4d18.509962"}, 
        
        { odleglosc: this.SiłowniaplenerowanaOsMikołajaKopernika2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58579360_2335272373358261_6859489244784623616_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=95f48ab8a934fbfa8e8ce3ed6fb86edb&oe=5D653F17",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika (2)/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Os. Mikołaja Kopernika (2) ",
          Adres: "Os. Mikołaja Kopernika 27 ",
          Kategoria_Miejsca: "Siłownia  plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'31.2%22N+18%C2%B031'37.7%22E/@53.9586671,18.5249573,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958664!4d18.527146"},

        { odleglosc: this.SiłowniaplenerowanaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58689299_567819123727133_8428206533317230592_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=0f66c1aa7f179134e8896e9dd05bd8fa&oe=5D71E057",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Os. Mikołaja Kopernika ",
          Adres: "Os. Mikołaja Kopernika 10 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'43.2%22N+18%C2%B031'39.2%22E/@53.9619971,18.5253673,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961994!4d18.527556"},

        { odleglosc: this.Leszczynowa2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60171722_424255411485662_874231990281306112_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=1a58dfe5c544ea314ea0fd32cd242d3c&oe=5D6BC635",
          zdjecie2: "../../assets/imgs/Leszczynowa 2/2.jpg",
          zdjecie3: "../../assets/imgs/Leszczynowa 2/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Przylesiu ",
          Adres: "Leszczynowa 2 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B056'09.8%22N+18%C2%B030'20.4%22E/@53.9360651,18.5034773,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.936062!4d18.505666"},

        { odleglosc: this.SiłowniaplenerowaobokPolpharmy,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59551421_1381352328671363_6871539746196160512_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=ba8ca48f6a1420ce48835cb3aad43597&oe=5D782592",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa obok Polpharmy/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa obok Polpharmy/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa obok Polpharmy ",
          Adres: "Pelplińska 19 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.2%22N+18%C2%B032'16.6%22E/@53.9606151,18.5357653,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960612!4d18.537954"},

        { odleglosc: this.SiłowniaplenerowaParkNoweOblicze,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59410323_316495075701289_8614898333493755904_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=9c0e49732ca8d84b57e3c322b17bb08d&oe=5D60834E",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa Park Nowe Oblicze/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa Park Nowe Oblicze/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa Park Nowe Oblicze ",
          Adres: "Al. Jana Pawła II 3 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.0%22N+18%C2%B031'52.9%22E/@53.9625001,18.5291593,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962497!4d18.531348"},

        { odleglosc: this.SiłowniaplenerowaprzyOsJurandazeSpychowa,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/57556888_605996723214139_6633415386232520704_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=dadf37d68524961d5dbfa98427b88c48&oe=5D2E4486",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa przy Os. Juranda ze Spychowa/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa przy Os. Juranda ze Spychowa/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa przy Os. Juranda ze Spychowa ",
          Adres: "Zblewska 16 ",
          Kategoria_Miejsca: "Siłownia ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.7%22N+18%C2%B030'22.4%22E/@53.9625001,18.5291593,538m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d53.961868!4d18.50622"},

        { odleglosc: this.SiłowniaplenerowaprzyulTraugutta,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285790_805281483198816_1529464143600418816_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=ee58bb74edbeeeefccc104e1fab0853d&oe=5D29CD0B",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa przy ul. Traugutta/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa przy ul. Traugutta/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa przy ul. Traugutta ",
          Adres: "ul. Romualda Traugutta 38 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "06:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'40.2%22N+18%C2%B032'15.9%22E/@53.9778286,18.5366265,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977827!4d18.537753"},

        { odleglosc: this.SiłowniaplenerowaprzyulicySzturmowskiego,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59157494_670789763380152_3256393029291868160_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=bad6a213c44b6dd4c9182b629a7ad5f2&oe=5D5FA13F",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa przy ulicy Szturmowskiego/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa przy ulicy Szturmowskiego/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa przy ulicy Szturmowskiego ",
          Adres: "Szturmowskiego 16 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.9%22N+18%C2%B029'34.1%22E/@53.9616511,18.4906073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961648!4d18.492796"},

        { odleglosc: this.SiłowniaplenerowawParkuRekreacyjnymAKUKU,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58442630_466412973900066_1802526494853955584_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=b5e2048e5769049e26e2b1200b349ee0&oe=5D735B19",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa w Parku Rekreacyjnym AKUKU/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa w Parku Rekreacyjnym AKUKU/3.jpg",

          Nazwa_Miejsca: "Street Workout Park w Parku Rekreacyjnym AKUKU",
          Adres: "Stanisława Kryzana 14 ",
          Kategoria_Miejsca: "Siłownia plenerowa ",
          Dyscyplina: "Sporty siłowe; Fitness ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},

        { odleglosc: this.StreetWorkoutParkprzyOsJurandazeSpychowa,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58961653_441346383094491_1133507878766772224_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=b451cf86aed93c986dee0143ea911674&oe=5D2A323A",
          zdjecie2: "../../assets/imgs/Street Workout Park przy Os. Juranda ze Spychowa/2.jpg",
          zdjecie3: "../../assets/imgs/Street Workout Park przy Os. Juranda ze Spychowa/3.jpg",

          Nazwa_Miejsca: "Street Workout Park przy Os. Juranda ze Spychowa ",
          Adres: "Zblewska 16 ",
          Kategoria_Miejsca: "Siłownia ",
          Dyscyplina: "Sporty siłowe; Kalistenika ",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.5%22N+18%C2%B030'19.6%22E/@53.9626471,18.5032423,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962644!4d18.505431"},
        
        { odleglosc: this.KlubFalangaStarogard,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59299091_2479711962059201_1485930402332803072_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=9f80a5258f7472af850d76c53ecd81b6&oe=5D773AEA",
          zdjecie2: "../../assets/imgs/Klub Falanga Starogard/2.jpg",
          zdjecie3: "../../assets/imgs/Klub Falanga Starogard/3.jpg",

          Nazwa_Miejsca: "Klub Falanga Starogard",
          Adres: "Rokocin 4d",
          Kategoria_Miejsca: "Klub sportowy",
          Dyscyplina: "Crossfit",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt. 18:00 – 20:00 (zajęcia odbywają się o 18:00 i 19:00) \n Sob. 10:00 – 11:00`,
          Koszt: `30 dni darmowy okres próbny (treningi poniedziałek/środa/ piątek godz. 19:00) \n Karnet Basic 150 zł/ msc (bez limitu treningów) dla początkujących, \n Karnet Pro 250 zł/ msc (bez limitu treningów) dla zaawansowanych`,
          Strona_Internetowa: "https://www.facebook.com/pg/falangastarogard/about/?ref=page_internal",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B056'41.2%22N+18%C2%B030'50.6%22E/@53.9447791,18.5118673,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.944776!4d18.514056"},
        
        { odleglosc: this.SiłowniaplenerowaprzyplacuzabawFikumiku,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59914161_326754854690614_8140039997559406592_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=44e6482e701ae4e95a738ef07e359b48&oe=5D5A4CBF",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa przy placu zabaw Fiku-miku/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa przy placu zabaw Fiku-miku/3.jpg",

          Nazwa_Miejsca: 'Siłownia plenerowa przy placu zabaw "Fiku-miku"',
          Adres: "ul. Jana Buchholtza 6",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.pl/maps/place/Jana+Buchholza+6,+83-250+Starogard+Gdański/@53.9732109,18.5425676,17z/data=!4m5!3m4!1s0x47029c9a9b3ef00b:0x767aa42251651a23!8m2!3d53.9729004!4d18.5426218"},
        
        { odleglosc: this.SiłowniaplenerowaILO,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62007810_2284191734968336_8629090039311106048_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=2a24503f574fed5ce1717ab467e94f7f&oe=5D8607D1",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62211140_350116682356166_4118848919327211520_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=b5a029a8aa7f9d06c412104790652a38&oe=5D8DE66D",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62052375_2272129522876861_4997394684566306816_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=a263e9e87e5f08adf655d2754da64d49&oe=5D925D26",

          Nazwa_Miejsca: "Siłownia plenerowa I LO",
          Adres: "Generała Józefa Hallera 31",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "15:00 - 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B058'15.3%22N+18%C2%B031'52.6%22E/@53.9709208,18.5307042,168m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97092!4d18.531272?hl=pl"},
        
        { odleglosc: this.SiłowniaplenerowaILO2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62307640_341924979840034_7115018603233017856_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=5ae41269b5c955b03d41362c5c245351&oe=5D90A377",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62366824_478349779373586_6164124178317312_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=620c38d3adef82c650ff334351dbc4d3&oe=5D7FEF3A",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62421957_366140140925681_6424818260708950016_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=333e4de64ba5c4eb52712884869be308&oe=5D9B2EA8",

          Nazwa_Miejsca: "Siłownia plenerowa I LO (2)",
          Adres: "Generała Józefa Hallera 31",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "15:00 - 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B058'16.5%22N+18%C2%B031'54.3%22E/@53.9712458,18.5311772,167m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971245!4d18.531742?hl=pl"},
          
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
    if(WYNIK == "FitnessYankess")
      this.FitnessYankess = this.kilometry
    if(WYNIK == "FLOWPARKStreetworkoutPark")
      this.FLOWPARKStreetworkoutPark = this.kilometry
    if(WYNIK == "NeptunGym")
      this.NeptunGym = this.kilometry
    if(WYNIK == "PumaKlubFitness")
      this.PumaKlubFitness = this.kilometry

// *-----------------------------------*//


    if(WYNIK == "SiłowniaplenerowaOSiR")
      this.SiłowniaplenerowaOSiR = this.kilometry
    if(WYNIK == "SiłowniaplenerowanaOsKonstytucji3goMaja")
      this.SiłowniaplenerowanaOsKonstytucji3goMaja = this.kilometry
    if(WYNIK == "SiłowniaplenerowanaOsMikołajaKopernika2")
      this.SiłowniaplenerowanaOsMikołajaKopernika2 = this.kilometry
    if(WYNIK == "SiłowniaplenerowanaOsMikołajaKopernika")
      this.SiłowniaplenerowanaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "Leszczynowa2")
      this.Leszczynowa2 = this.kilometry
    if(WYNIK == "SiłowniaplenerowaobokPolpharmy")
      this.SiłowniaplenerowaobokPolpharmy = this.kilometry
    if(WYNIK == "SiłowniaplenerowaParkNoweOblicze")
      this.SiłowniaplenerowaParkNoweOblicze = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyOsJurandazeSpychowa")
      this.SiłowniaplenerowaprzyOsJurandazeSpychowa = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyulTraugutta")
      this.SiłowniaplenerowaprzyulTraugutta = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyulicySzturmowskiego")
      this.SiłowniaplenerowaprzyulicySzturmowskiego = this.kilometry
    if(WYNIK == "SiłowniaplenerowawParkuRekreacyjnymAKUKU")
      this.SiłowniaplenerowawParkuRekreacyjnymAKUKU = this.kilometry
    if(WYNIK == "StreetWorkoutParkprzyOsJurandazeSpychowa")
      this.StreetWorkoutParkprzyOsJurandazeSpychowa = this.kilometry
    if(WYNIK == "KlubFalangaStarogard")
      this.KlubFalangaStarogard = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyplacuzabawFikumiku")
      this.SiłowniaplenerowaprzyplacuzabawFikumiku = this.kilometry
    if(WYNIK == "SiłowniaplenerowaILO")
      this.SiłowniaplenerowaILO = this.kilometry
    if(WYNIK == "SiłowniaplenerowaILO2")
      this.SiłowniaplenerowaILO2 = this.kilometry  

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