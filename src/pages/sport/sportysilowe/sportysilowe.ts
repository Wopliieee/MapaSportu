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
  selector: 'page-sportysilowe',
  templateUrl: 'sportysilowe.html',
})
export class SportysilowePage {
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
  DrążkidoStreetworkoutprzyulicySzturmowskiego: any;
  EbroGym: any;
  FitnessYankess: any;
  FLOWPARKStreetworkoutPark: any;
  KlubFalangaStarogard: any;
  PumaKlubFitness: any;
  NeptunGym: any;
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

    this.ObliczKilometry(53.961521, 18.493140, "DrążkidoStreetworkoutprzyulicySzturmowskiego")
    this.ObliczKilometry(53.962998, 18.508376, "EbroGym")
    this.ObliczKilometry(53.963387, 18.517096, "FitnessYankess")
    this.ObliczKilometry(53.962796, 18.521749, "FLOWPARKStreetworkoutPark")
    this.ObliczKilometry(53.944776, 18.514056, "KlubFalangaStarogard")
    this.ObliczKilometry(53.964129, 18.527410, "PumaKlubFitness")
    this.ObliczKilometry(53.964124, 18.529760, "NeptunGym")
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

    const miejsca: Miejsce[] =[
      { odleglosc: this.DrążkidoStreetworkoutprzyulicySzturmowskiego,

          zdjecie: "../../assets/imgs/Drążki do Streetworkout przy ulicy Szturmowskiego/1.jpg",
          zdjecie2: "../../assets/imgs/Drążki do Streetworkout przy ulicy Szturmowskiego/2.jpg",
          zdjecie3: "../../assets/imgs/Drążki do Streetworkout przy ulicy Szturmowskiego/3.jpg",

          Nazwa_Miejsca: "Drążki do Streetworkout przy ulicy Szturmowskiego",
          Adres: "Szturmowskiego 16",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe;",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.5%22N+18%C2%B029'35.3%22E/@53.9615241,18.4909513,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961521!4d18.49314"},
        
        { odleglosc: this.EbroGym,

          zdjecie: "../../assets/imgs/Ebro Gym/1.jpg",
          zdjecie2: "../../assets/imgs/Ebro Gym/2.jpg",
          zdjecie3: "../../assets/imgs/Ebro Gym/3.jpg",

          Nazwa_Miejsca: "Ebro Gym",
          Adres: "Zblewska 10b",
          Kategoria_Miejsca: "Siłownia; Klub sportowy",
          Dyscyplina: "Sporty siłowe; Fitness; Taniec",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 7:00 – 22:00
                                      Sob. – Ndz.: 7:00 – 18:00`,
          Koszt: `149zł/ mies.
               20zł/ 1 wejście`,
          Strona_Internetowa: "http://www.ebrogym.pl/starogard/cennik.html",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.8%22N+18%C2%B030'30.2%22E/@53.9630011,18.5061873,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962998!4d18.508376"},

        { odleglosc: this.FitnessYankess,

          zdjecie: "../../assets/imgs/Fitness Yankess/1.jpg",
          zdjecie2: "../../assets/imgs/Fitness Yankess/2.jpg",
          zdjecie3: "../../assets/imgs/Fitness Yankess/3.jpg",

          Nazwa_Miejsca: "Fitness Yankess",
          Adres: "Orlińskiego 4",
          Kategoria_Miejsca: "Siłownia; Klub sportowy",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 8:00 – 22:00
                                      Sobota: 9:00 – 15:00
                                      Ndz.: 11:00 – 15:00`,
          Koszt: `1 wejście: 29zł
               Karnet 1 mies.: 100zł`,
          Strona_Internetowa: "http://yankes.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'48.2%22N+18%C2%B031'01.6%22E/@53.9633901,18.5149073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963387!4d18.517096"},

        { odleglosc: this.FLOWPARKStreetworkoutPark,

          zdjecie: "../../assets/imgs/FLOWPARK Streetworkout Park/1.jpg",
          zdjecie2: "../../assets/imgs/FLOWPARK Streetworkout Park/2.jpg",
          zdjecie3: "../../assets/imgs/FLOWPARK Streetworkout Park/3.jpg",

          Nazwa_Miejsca: "FLOWPARK Streetworkout Park",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 8",
          Kategoria_Miejsca: "Streetworkout Park",
          Dyscyplina: "Sport siłowe; Kalistenika; Streetworkout",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 - 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.1%22N+18%C2%B031'18.3%22E/@53.9627991,18.5195603,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962796!4d18.521749"},

        { odleglosc: this.KlubFalangaStarogard,

          zdjecie: "../../assets/imgs/Klub Falanga Starogard/1.jpg",
          zdjecie2: "../../assets/imgs/Klub Falanga Starogard/2.jpg",
          zdjecie3: "../../assets/imgs/Klub Falanga Starogard/3.jpg",

          Nazwa_Miejsca: "Klub Falanga Starogard",
          Adres: "Rokocin 4d",
          Kategoria_Miejsca: "Klub sportowy",
          Dyscyplina: "Crossfit",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt. 18:00 – 20:00 (zajęcia odbywają się o 18:00 i 19:00)
                                      Sob. 10:00 – 11:00`,
          Koszt: `30 dni darmowy okres próbny (treningi poniedziałek/środa/ piątek godz. 19:00)
               Karnet Basic 150 zł/ msc (bez limitu treningów) dla początkujących,
               Karnet Pro 250 zł/ msc (bez limitu treningów) dla zaawansowanych`,
          Strona_Internetowa: "https://www.facebook.com/pg/falangastarogard/about/?ref=page_internal",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B056'41.2%22N+18%C2%B030'50.6%22E/@53.9447791,18.5118673,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.944776!4d18.514056"},


        { odleglosc: this.PumaKlubFitness,

          zdjecie: "../../assets/imgs/Puma Klub Fitness/1.jpg",
          zdjecie2: "../../assets/imgs/Puma Klub Fitness/2.jpg",
          zdjecie3: "../../assets/imgs/Puma Klub Fitness/3.jpg",

          Nazwa_Miejsca: "Puma Klub Fitness",
          Adres: "Pomorska 3",
          Kategoria_Miejsca: "Siłownia; Klub sportowy",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt: 7:30 – 21:00
                                      Sobota: 8:00 – 17:00
                                      Niedziela: 10:00 – 15:00`,
          Koszt: "129zł/ mies. lub 20zł/ 1 wejście",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'38.7%22E/@53.9641321,18.5252213,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964129!4d18.52741"},

        { odleglosc: this.NeptunGym,

          zdjecie: "../../assets/imgs/Neptun Gym/1.jpg",
          zdjecie2: "../../assets/imgs/Neptun Gym/2.jpg",
          zdjecie3: "../../assets/imgs/Neptun Gym/3.jpg",

          Nazwa_Miejsca: "Neptun Gym",
          Adres: "Pomorska 7",
          Kategoria_Miejsca: "Siłownia; Klub sportowy",
          Dyscyplina: "Sporty siłowe; Fitness; Taniec",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. - Pt.: 6:00 – 22:00
                                      Sobota: 9:00 – 21:00
                                      Niedziela: 9:00 – 20:00`,
          Koszt:`129zł/ mies.
               25zł/ 1 wejście`,
          Strona_Internetowa: "http://neptungym.pl/cennik/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'47.1%22E/@53.9641271,18.5275713,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964124!4d18.52976"},

        { odleglosc: this.SiłowniaplenerowaOSiR,

          zdjecie: "../../assets/imgs/Siłownia plenerowa (OSiR)/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa (OSiR)/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},

        { odleglosc: this.SiłowniaplenerowanaOsKonstytucji3goMaja,

          zdjecie: "../../assets/imgs/Siłownia plenerowa na Os. Konstytucji 3-go Maja/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Konstytucji 3-go Maja/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Konstytucji 3-go Maja/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Os. Konstytucji 3-go Maja",
          Adres: "Os. Konstytucji 3-go Maja",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.4%22N+18%C2%B030'35.9%22E/@53.9637301,18.5077733,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963727!4d18.509962"},

        { odleglosc: this.SiłowniaplenerowanaOsMikołajaKopernika2,

          zdjecie: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika (2)/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika (2)/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Os. Mikołaja Kopernika (2)",
          Adres: "Os. Mikołaja Kopernika 27",
          Kategoria_Miejsca: "Siłownia  plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'31.2%22N+18%C2%B031'37.7%22E/@53.9586671,18.5249573,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958664!4d18.527146"},

        { odleglosc: this.SiłowniaplenerowanaOsMikołajaKopernika,

          zdjecie: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 10",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'43.2%22N+18%C2%B031'39.2%22E/@53.9619971,18.5253673,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961994!4d18.527556"},

        { odleglosc: this.Leszczynowa2,

          zdjecie: "../../assets/imgs/Leszczynowa 2/1.jpg",
          zdjecie2: "../../assets/imgs/Leszczynowa 2/2.jpg",
          zdjecie3: "../../assets/imgs/Leszczynowa 2/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa na Przylesiu",
          Adres: "Leszczynowa 2",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B056'09.8%22N+18%C2%B030'20.4%22E/@53.9360651,18.5034773,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.936062!4d18.505666"},

        { odleglosc: this.SiłowniaplenerowaobokPolpharmy,

          zdjecie: "../../assets/imgs/Siłownia plenerowa obok Polpharmy/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa obok Polpharmy/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa obok Polpharmy/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa obok Polpharmy",
          Adres: "Pelplińska 19",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.2%22N+18%C2%B032'16.6%22E/@53.9606151,18.5357653,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960612!4d18.537954"},

        { odleglosc: this.SiłowniaplenerowaParkNoweOblicze,

          zdjecie: "../../assets/imgs/Siłownia plenerowa Park Nowe Oblicze/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa Park Nowe Oblicze/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa Park Nowe Oblicze/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa Park Nowe Oblicze",
          Adres: "Al. Jana Pawła II 3",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.0%22N+18%C2%B031'52.9%22E/@53.9625001,18.5291593,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962497!4d18.531348"},

        { odleglosc: this.SiłowniaplenerowaprzyOsJurandazeSpychowa,

          zdjecie: "../../assets/imgs/Siłownia plenerowa przy Os. Juranda ze Spychowa/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa przy Os. Juranda ze Spychowa/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa przy Os. Juranda ze Spychowa/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa przy Os. Juranda ze Spychowa",
          Adres: "Zblewska 16",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.7%22N+18%C2%B030'22.4%22E/@53.9625001,18.5291593,538m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d53.961868!4d18.50622"},

        { odleglosc: this.SiłowniaplenerowaprzyulTraugutta,

          zdjecie: "../../assets/imgs/Siłownia plenerowa przy ul. Traugutta/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa przy ul. Traugutta/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa przy ul. Traugutta/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa przy ul. Traugutta",
          Adres: "ul. Romualda Traugutta 38",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "06:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'40.2%22N+18%C2%B032'15.9%22E/@53.9778286,18.5366265,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977827!4d18.537753"},

        { odleglosc: this.SiłowniaplenerowaprzyulicySzturmowskiego,

          zdjecie: "../../assets/imgs/Siłownia plenerowa przy ulicy Szturmowskiego/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa przy ulicy Szturmowskiego/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa przy ulicy Szturmowskiego/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa przy ulicy Szturmowskiego",
          Adres: "Szturmowskiego 16",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.9%22N+18%C2%B029'34.1%22E/@53.9616511,18.4906073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961648!4d18.492796"},

        { odleglosc: this.SiłowniaplenerowawParkuRekreacyjnymAKUKU,

          zdjecie: "../../assets/imgs/Siłownia plenerowa w Parku Rekreacyjnym AKUKU/1.jpg",
          zdjecie2: "../../assets/imgs/Siłownia plenerowa w Parku Rekreacyjnym AKUKU/2.jpg",
          zdjecie3: "../../assets/imgs/Siłownia plenerowa w Parku Rekreacyjnym AKUKU/3.jpg",

          Nazwa_Miejsca: "Siłownia plenerowa w Parku Rekreacyjnym AKUKU",
          Adres: "Stanisława Kryzana 14",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},

        { odleglosc: this.StreetWorkoutParkprzyOsJurandazeSpychowa,

          zdjecie: "../../assets/imgs/Street Workout Park przy Os. Juranda ze Spychowa/1.jpg",
          zdjecie2: "../../assets/imgs/Street Workout Park przy Os. Juranda ze Spychowa/2.jpg",
          zdjecie3: "../../assets/imgs/Street Workout Park przy Os. Juranda ze Spychowa/3.jpg",

          Nazwa_Miejsca: "Street Workout Park przy Os. Juranda ze Spychowa",
          Adres: "Zblewska 16",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Kalistenika",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.5%22N+18%C2%B030'19.6%22E/@53.9626471,18.5032423,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962644!4d18.505431"},
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
    if(WYNIK == "DrążkidoStreetworkoutprzyulicySzturmowskiego")
      this.DrążkidoStreetworkoutprzyulicySzturmowskiego = this.kilometry
    if(WYNIK == "EbroGym")
      this.EbroGym = this.kilometry
    if(WYNIK == "FitnessYankess")
      this.FitnessYankess = this.kilometry
    if(WYNIK == "FLOWPARKStreetworkoutPark")
      this.FLOWPARKStreetworkoutPark = this.kilometry
    if(WYNIK == "KlubFalangaStarogard")
      this.KlubFalangaStarogard = this.kilometry
    if(WYNIK == "PumaKlubFitness")
      this.PumaKlubFitness = this.kilometry
    if(WYNIK == "NeptunGym")
      this.NeptunGym = this.kilometry
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