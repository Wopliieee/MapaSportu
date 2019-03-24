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
  selector: 'page-boiskodopilkinoznej',
  templateUrl: 'boiskodopilkinoznej.html',
})
export class BoiskodopilkinoznejPage {

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
  BoiskoDoPilkiNoznejNaOs60Lecia: any;
  BoiskoNaOsKonstytucji3GoMaja: any;
  BoiskoNaOsMikolajaKopernika: any;
  BoiskoNaOsMikolajaKopernika2: any;
  BoiskoNaPlacuZabaw: any;
  BoiskoNaPlacuZabawJacekIAgatka: any;
  BoiskoNaPrzylesiu: any;
  BoiskoNaUlicyPołudniowej: any;
  BoiskoObokPolpharmy: any;
  BoiskoPrzyOsJurandaZeSpychowa: any;
  BoiskoPSP4: any;
  BoiskoPSP1: any;
  BoiskoPSP12: any;
  BoiskoPSP3: any;
  BoiskoPSP32: any;
  BoiskoPSP3DawnePG2: any;
  BoiskoPSP6: any;
  BoiskoPSP8: any;
  BoiskoWParkuRekreacyjnymAKUKU: any;
  BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku: any;
  HalaSportowaImGerardaPodolskiegoAGRO: any;
  MiejskaHalaSportowaImAndrzejaGrubbyOSiR: any;
  SalaGimnastycznaIILiceumOgólnokształcące: any;
  SalaGimnastycznaPSP1: any;
  SalaGimnastycznaPSP8: any;
  SalaGimnastycznaZSE: any;
  StadionMiejskiImKazimierzaDeynyOSiR: any;
  StadionWłókniarzImKazimierzaKropidłowskiego: any;
  BoiskoDoPiłkiNożnejPrzyUlZielonej: any;
  BoiskoZSZ: any;


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

    this.ObliczKilometry(53.970017, 18.535273, "BoiskoOSIR")
    this.ObliczKilometry(53.963077, 18.521251, "BoiskoDoPilkiNoznejNaOs60Lecia")
    this.ObliczKilometry(53.963770, 18.509677, "BoiskoNaOsKonstytucji3GoMaja")
    this.ObliczKilometry(53.958335, 18.527997, "BoiskoNaOsMikolajaKopernika")
    this.ObliczKilometry(53.961813, 18.527325, "BoiskoNaOsMikolajaKopernika2")
    this.ObliczKilometry(53.977754, 18.521311, "BoiskoNaPlacuZabaw")
    this.ObliczKilometry(53.974143, 18.525033, "BoiskoNaPlacuZabawJacekIAgatka")
    this.ObliczKilometry(53.936257, 18.503759, "BoiskoNaPrzylesiu")
    this.ObliczKilometry(53.952400, 18.527250, "BoiskoNaUlicyPołudniowej")
    this.ObliczKilometry(53.960612, 18.537954, "BoiskoObokPolpharmy")
    this.ObliczKilometry(53.962401, 18.506016, "BoiskoPrzyOsJurandaZeSpychowa")
    this.ObliczKilometry(53.960937, 18.499596, "BoiskoPSP1")
    this.ObliczKilometry(53.961578, 18.500123, "BoiskoPSP12")
    this.ObliczKilometry(53.975131, 18.531258, "BoiskoPSP3")
    this.ObliczKilometry(53.972300, 18.537177, "BoiskoPSP32")
    this.ObliczKilometry(53.962934, 18.528891, "BoiskoPSP4")
    this.ObliczKilometry(53.983834, 18.492077, "BoiskoPSP6")
    this.ObliczKilometry(53.957562, 18.527770, "BoiskoPSP8")
    this.ObliczKilometry(53.982568, 18.502943, "BoiskoWParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.962721, 18.493032, "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.ObliczKilometry(53.969677, 18.526001, "HalaSportowaImGerardaPodolskiegoAGRO")
    this.ObliczKilometry(53.970017, 18.535273, "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.ObliczKilometry(53.964967, 18.547153, "SalaGimnastycznaIILiceumOgólnokształcące")
    this.ObliczKilometry(53.961259, 18.501102, "SalaGimnastycznaPSP1")
    this.ObliczKilometry(53.957562, 18.527770, "SalaGimnastycznaPSP8")
    this.ObliczKilometry(53.966320, 18.535633, "SalaGimnastycznaZSE")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiImKazimierzaDeynyOSiR")
    this.ObliczKilometry(53.969103, 18.519189, "StadionWłókniarzImKazimierzaKropidłowskiego")
    this.ObliczKilometry(53.977420, 18.540092, "BoiskoDoPiłkiNożnejPrzyUlZielonej")
    this.ObliczKilometry(53.966655, 18.533734, "BoiskoZSZ")

    const miejsca: Miejsce[] =[
      { odleglosc: this.BoiskoOSIR,

        zdjecie: "../../assets/imgs/Boisko (OSiR)/1.jpg",
        zdjecie2: "../../assets/imgs/Boisko (OSiR)/2.jpg",
        zdjecie3: "../../assets/imgs/Boisko (OSiR)/3.jpg",

        Nazwa_Miejsca: "Boisko (OSiR)",
        Adres: "Olimpijczyków Starogardzkich 1",
        Kategoria_Miejsca: "Boisko zewnętrzne",
        Dyscyplina: "Piłka nożna",
        Nawierzchnia: "Murawa sztuczna",
        Godziny_Otwarcia: "7:00 – 22:00",
        Koszt: "Bezpłatne (możliwość rezerwacji)",
        Strona_Internetowa: "http://osir.com.pl/obiekty/",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
          
      { odleglosc: this.BoiskoDoPilkiNoznejNaOs60Lecia,

          zdjecie: "../../assets/imgs/Boisko do piłki nożnej na Os. 60-lecia/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko do piłki nożnej na Os. 60-lecia/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko do piłki nożnej na Os. 60-lecia/3.jpg",

          Nazwa_Miejsca: "Boisko do piłki nożnej na Os. 60-lecia",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 8",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'47.1%22N+18%C2%B031'16.5%22E/@53.9630801,18.5190623,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963077!4d18.521251"},
      { odleglosc: this.BoiskoNaOsKonstytucji3GoMaja,

          zdjecie: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Konstytucji 3-go Maja",
          Adres: "Os. Konstytucji 3-go Maja 14",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.6%22N+18%C2%B030'34.8%22E/@53.9637731,18.5074883,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96377!4d18.509677"},
      
      { odleglosc: this.BoiskoNaOsMikolajaKopernika,

          zdjecie: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 27",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'30.0%22N+18%C2%B031'40.8%22E/@53.9583381,18.5258083,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958335!4d18.527997"},
      
      { odleglosc: this.BoiskoNaOsMikolajaKopernika2,

          zdjecie: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (2)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (2)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika (2)",
          Adres: "Os. Mikołaja Kopernika 10",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka ręczna; Piłka nożna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.5%22N+18%C2%B031'38.4%22E/@53.9618161,18.5251363,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961813!4d18.527325"},

      { odleglosc: this.BoiskoNaPlacuZabaw,

          zdjecie: "../../assets/imgs/Boisko na placu zabaw/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na placu zabaw/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na placu zabaw/3.jpg",

          Nazwa_Miejsca: "Boisko na placu zabaw",
          Adres: "Sadowa 6 - 10",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'39.9%22N+18%C2%B031'16.7%22E/@53.9777571,18.5191223,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977754!4d18.521311"},
        
      { odleglosc: this.BoiskoNaPlacuZabawJacekIAgatka,

          zdjecie: "../../assets/imgs/Boisko na placu zabaw „Jacek i Agatka”/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na placu zabaw „Jacek i Agatka”/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na placu zabaw „Jacek i Agatka”/3.jpg",

          Nazwa_Miejsca: "Boisko na placu zabaw „Jacek i Agatka”",
          Adres: "Grunwaldzka 6",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'26.9%22N+18%C2%B031'30.1%22E/@53.9741461,18.5228443,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.974143!4d18.525033"},
        

      { odleglosc: this.BoiskoNaPrzylesiu,

          zdjecie: "../../assets/imgs/Boisko na Przylesiu/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Przylesiu/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Przylesiu/3.jpg",

          Nazwa_Miejsca: "Boisko na Przylesiu",
          Adres: "Leszczynowa 3",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B056'10.5%22N+18%C2%B030'13.5%22E/@53.9362601,18.5015703,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.936257!4d18.503759"},
        
      { odleglosc: this.BoiskoNaUlicyPołudniowej,

          zdjecie: "../../assets/imgs/Boisko na ulicy Południowej/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na ulicy Południowej/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na ulicy Południowej/3.jpg",

          Nazwa_Miejsca: "Boisko na ulicy Południowej",
          Adres: "Południowa 40",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'08.6%22N+18%C2%B031'38.1%22E/@53.9524031,18.5250613,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.9524!4d18.52725"},

      { odleglosc: this.BoiskoObokPolpharmy,

          zdjecie: "../../assets/imgs/Boisko obok Polpharmy/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko obok Polpharmy/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko obok Polpharmy/3.jpg",

          Nazwa_Miejsca: "Boisko obok Polpharmy",
          Adres: "Pelplińska 19",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.2%22N+18%C2%B032'16.6%22E/@53.9606151,18.5357653,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960612!4d18.537954"},

      { odleglosc: this.BoiskoPrzyOsJurandaZeSpychowa,

          zdjecie: "../../assets/imgs/Boisko przy Os. Juranda ze Spychowa/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko przy Os. Juranda ze Spychowa/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko przy Os. Juranda ze Spychowa/3.jpg",

          Nazwa_Miejsca: "Boisko przy Os. Juranda ze Spychowa",
          Adres: "Zblewska 16",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'44.6%22N+18%C2%B030'21.7%22E/@53.9624041,18.5038273,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962401!4d18.506016"},

      { odleglosc: this.BoiskoPSP4,

          zdjecie: "../../assets/imgs/Boisko PSP 4/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP 4/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP 4/3.jpg",

          Nazwa_Miejsca: "Boisko PSP 4",
          Adres: "Henryka Sienkiewicza 19 ",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'25.7%22N+18%C2%B032'01.1%22E/@53.9571471,18.5314383,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957144!4d18.533627"},

      { odleglosc: this.BoiskoPSP1,

          zdjecie: "../../assets/imgs/Boisko PSP1/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP1/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP1/3.jpg",

          Nazwa_Miejsca: "Boisko PSP1",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Murawa sztuczna",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'39.4%22N+18%C2%B029'58.6%22E/@53.9609401,18.4974073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960937!4d18.499596"},

      { odleglosc: this.BoiskoPSP12,

          zdjecie: "../../assets/imgs/Boisko PSP1 (2)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP1 (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP1 (2)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP1 (2)",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.7%22N+18%C2%B030'00.4%22E/@53.9615811,18.4979343,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961578!4d18.500123"},

      { odleglosc: this.BoiskoPSP3,

          zdjecie: "../../assets/imgs/Boisko PSP3/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP3/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP3/3.jpg",

          Nazwa_Miejsca: "Boisko PSP3",
          Adres: "Wybickiego 17",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka ręczna; Piłka nożna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'30.5%22N+18%C2%B031'52.5%22E/@53.9751341,18.5290693,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975131!4d18.531258"},

      { odleglosc: this.BoiskoPSP32,

          zdjecie: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP3 (2)",
          Adres: "Traugutta 2",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Murawa sztuczna",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne/ Możliwość rezerwacji",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'20.3%22N+18%C2%B032'13.8%22E/@53.9723031,18.5349883,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.9723!4d18.537177"},
          
      { odleglosc: this.BoiskoPSP6,

          zdjecie: "../../assets/imgs/Boisko PSP6/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP6/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP6/3.jpg",

          Nazwa_Miejsca: "Boisko PSP6",
          Adres: "Biskupa Konstantyna Dominika 32",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Beton",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://www.psp6.stg.pl/index.html",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B059'01.8%22N+18%C2%B029'31.5%22E/@53.9838371,18.4898883,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.983834!4d18.492077"},
          
      { odleglosc: this.BoiskoPSP8,

          zdjecie: "../../assets/imgs/Boisko PSP8/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP8/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP8/3.jpg",

          Nazwa_Miejsca: "Boisko PSP8",
          Adres: "Aleja Jana Pawła II 10",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka ręczna; Piłka nożna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://psp8.edu.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},

      { odleglosc: this.BoiskoWParkuRekreacyjnymAKUKU,

          zdjecie: "../../assets/imgs/Boisko w Parku Rekreacyjnym AKUKU/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko w Parku Rekreacyjnym AKUKU/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko w Parku Rekreacyjnym AKUKU/3.jpg",

          Nazwa_Miejsca: "Boisko w Parku Rekreacyjnym AKUKU",
          Adres: "Stanisława Kryzana 14",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},

      { odleglosc: this.BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku,

          zdjecie: "../../assets/imgs/Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku/3.jpg",

          Nazwa_Miejsca: "Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku",
          Adres: "Nierzwickiego 18",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "7:00 – 21:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.8%22N+18%C2%B029'34.9%22E/@53.9627241,18.4908433,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962721!4d18.493032"},

      { odleglosc: this.HalaSportowaImGerardaPodolskiegoAGRO,

          zdjecie: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/1.jpg",
          zdjecie2: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/2.jpg",
          zdjecie3: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/3.jpg",

          Nazwa_Miejsca: "Hala sportowa im. Gerarda Podolskiego (AGRO)",
          Adres: "Generała Józefa Hallera 19A",
          Kategoria_Miejsca: "Hala sportowa",
          Dyscyplina: "Koszykówka; Piłka ręczna; Piłka nożna halowa; Sporty siłowe; Gimnastyka;  Boks; Kickboxing; Aikido; Brazylijskie Jujitsu; Kali Eskrima; Karate; Lekkoatletyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://starogard.pl/lokalizacje/hala-sportowa-im-gerarda-podolskiego/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'10.8%22N+18%C2%B031'33.6%22E/@53.9696801,18.5238123,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.969677!4d18.526001"},
      
      { odleglosc: this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR,

          zdjecie: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/1.jpg",
          zdjecie2: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/3.jpg",

          Nazwa_Miejsca: "Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Hala sportowa",
          Dyscyplina: "Koszykówka; Siatkówka; Tenis ziemny; Piłka ręczna; Piłka nożna; Sporty siłowe; Gimnastyka; Fitness",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "7:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
        
      { odleglosc: this.SalaGimnastycznaIILiceumOgólnokształcące,

          zdjecie: "../../assets/imgs/Sala gimnastyczna II Liceum Ogólnokształcące/1.jpg",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna II Liceum Ogólnokształcące/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna II Liceum Ogólnokształcące/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna II Liceum Ogólnokształcące",
          Adres: "Tadeusza Kościuszki 131",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "15:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://www.2lo.stg.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'53.9%22N+18%C2%B032'49.8%22E/@53.9649701,18.5449643,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964967!4d18.547153"},
        
      { odleglosc: this.SalaGimnastycznaPSP1,

          zdjecie: "../../assets/imgs/Sala gimnastyczna PSP1/1.jpg",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP1/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP1/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP1",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'40.5%22N+18%C2%B030'04.0%22E/@53.9612621,18.4989133,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961259!4d18.501102"},
        
      { odleglosc: this.SalaGimnastycznaPSP8,

          zdjecie: "../../assets/imgs/Sala gimnastyczna PSP8/1.jpg",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP8/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP8/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP8",
          Adres: "Aleja Jana Pawła II 10",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://psp8.edu.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},
        
      { odleglosc: this.SalaGimnastycznaZSE,

          zdjecie: "../../assets/imgs/Sala gimnastyczna ZSE/1.jpg",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna ZSE/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna ZSE/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna ZSE",
          Adres: "Jana Sobieskiego 6",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "15:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://www.zse.com.pl/pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'58.8%22N+18%C2%B032'08.3%22E/@53.9663231,18.5334443,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96632!4d18.535633"},
      { odleglosc: this.StadionMiejskiImKazimierzaDeynyOSiR,

          zdjecie: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR)/1.jpg",
          zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR)/3.jpg",

          Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Murawa",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
        
      { odleglosc: this.StadionWłókniarzImKazimierzaKropidłowskiego,

          zdjecie: "../../assets/imgs/Stadion Włókniarz im. Kazimierza Kropidłowskiego/1.jpg",
          zdjecie2: "../../assets/imgs/Stadion Włókniarz im. Kazimierza Kropidłowskiego/2.jpg",
          zdjecie3: "../../assets/imgs/Stadion Włókniarz im. Kazimierza Kropidłowskiego/3.jpg",

          Nazwa_Miejsca: "Stadion Włókniarz im. Kazimierza Kropidłowskiego",
          Adres: "Harcerska 11",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Murawa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://starogard.pl/lokalizacje/stadion-wlokniarz-im-kazimierza-kropidlowskiego/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'08.8%22N+18%C2%B031'09.1%22E/@53.9691061,18.5170003,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.969103!4d18.519189"},
        
      { odleglosc: this.BoiskoDoPiłkiNożnejPrzyUlZielonej,

          zdjecie: "../../assets/imgs/Boisko do piłki nożnej przy ul. Zielonej/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko do piłki nożnej przy ul. Zielonej/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko do piłki nożnej przy ul. Zielonej/3.jpg",

          Nazwa_Miejsca: "Boisko do piłki nożnej przy ul. Zielonej",
          Adres: "ul. Zielona 11",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "06:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'38.7%22N+18%C2%B032'24.3%22E/@53.9774216,18.5389649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97742!4d18.540092"},

      { odleglosc: this.BoiskoZSZ,

          zdjecie: "../../assets/imgs/Boisko ZSZ/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko ZSZ/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko ZSZ/3.jpg",

          Nazwa_Miejsca: "Boisko ZSZ",
          Adres: "ul. Ignacego Paderewskiego 11",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka nożna; Piłka ręczna; Koszykówka",
          Nawierzchnia: "Beton",
          Godziny_Otwarcia: "15:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'60.0%22N+18%C2%B032'01.4%22E/@53.9666569,18.5324365,319m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.966655!4d18.533734"},

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
    if(WYNIK == "BoiskoOSIR")
      this.BoiskoOSIR = this.kilometry
    
    if(WYNIK == "BoiskoDoPilkiNoznejNaOs60Lecia")
      this.BoiskoDoPilkiNoznejNaOs60Lecia = this.kilometry
    if(WYNIK == "BoiskoNaOsKonstytucji3GoMaja")
      this.BoiskoNaOsKonstytucji3GoMaja = this.kilometry
    if(WYNIK == "BoiskoNaOsMikolajaKopernika")
      this.BoiskoNaOsMikolajaKopernika = this.kilometry
    if(WYNIK == "BoiskoNaOsMikolajaKopernika2")
      this.BoiskoNaOsMikolajaKopernika2 = this.kilometry
    if(WYNIK == "BoiskoNaPlacuZabaw")
      this.BoiskoNaPlacuZabaw = this.kilometry
    if(WYNIK == "BoiskoNaPlacuZabawJacekIAgatka")
      this.BoiskoNaPlacuZabawJacekIAgatka = this.kilometry
    if(WYNIK == "BoiskoNaPrzylesiu")
      this.BoiskoNaPrzylesiu = this.kilometry
    if(WYNIK == "BoiskoNaUlicyPołudniowej")
      this.BoiskoNaUlicyPołudniowej = this.kilometry
    if(WYNIK == "BoiskoObokPolpharmy")
      this.BoiskoObokPolpharmy = this.kilometry
    if(WYNIK == "BoiskoPrzyOsJurandaZeSpychowa")
      this.BoiskoPrzyOsJurandaZeSpychowa = this.kilometry
    if(WYNIK == "BoiskoPSP4")
      this.BoiskoPSP4 = this.kilometry
    if(WYNIK == "BoiskoPSP1")
      this.BoiskoPSP1 = this.kilometry
    if(WYNIK == "BoiskoPSP12")
      this.BoiskoPSP12 = this.kilometry
    if(WYNIK == "BoiskoPSP3")
      this.BoiskoPSP3 = this.kilometry
    if(WYNIK == "BoiskoPSP32")
      this.BoiskoPSP32 = this.kilometry
    if(WYNIK == "BoiskoPSP6")
      this.BoiskoPSP6 = this.kilometry
    if(WYNIK == "BoiskoPSP8")
      this.BoiskoPSP8 = this.kilometry
    if(WYNIK == "BoiskoWParkuRekreacyjnymAKUKU")
      this.BoiskoWParkuRekreacyjnymAKUKU = this.kilometry
    if(WYNIK == "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
      this.BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku = this.kilometry
    if(WYNIK == "HalaSportowaImGerardaPodolskiegoAGRO")
      this.HalaSportowaImGerardaPodolskiegoAGRO = this.kilometry
    if(WYNIK == "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
      this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR = this.kilometry
    if(WYNIK == "SalaGimnastycznaIILiceumOgólnokształcące")
      this.SalaGimnastycznaIILiceumOgólnokształcące = this.kilometry
    if(WYNIK == "SalaGimnastycznaPSP1")
      this.SalaGimnastycznaPSP1 = this.kilometry
    if(WYNIK == "SalaGimnastycznaPSP8")
      this.SalaGimnastycznaPSP8 = this.kilometry
    if(WYNIK == "SalaGimnastycznaZSE")
      this.SalaGimnastycznaZSE = this.kilometry
    if(WYNIK == "StadionMiejskiImKazimierzaDeynyOSiR")
      this.StadionMiejskiImKazimierzaDeynyOSiR = this.kilometry
    if(WYNIK == "StadionWłókniarzImKazimierzaKropidłowskiego")
      this.StadionWłókniarzImKazimierzaKropidłowskiego = this.kilometry
    if(WYNIK == "BoiskoDoPiłkiNożnejPrzyUlZielonej")
      this.BoiskoDoPiłkiNożnejPrzyUlZielonej = this.kilometry
    if(WYNIK == "BoiskoZSZ")
      this.BoiskoZSZ = this.kilometry


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