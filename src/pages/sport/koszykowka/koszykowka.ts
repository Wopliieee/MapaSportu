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
  BoiskoOSIR: any;
  BoiskoDoKoszykówkiPrzyUlTrauguta: any;
  BoiskoNaAleiJanaPawlaII2: any;
  BoiskoNaAleiJanaPawlaII: any;
  BoiskoNaOs60Lecia2: any;
  BoiskoNaOs60lecia: any;
  OsKonstytucji3goMaja2: any;
  BoiskoNaOsKonstytucji3goMaja: any;
  BoiskoNaOsMikołajaKopernika2: any;
  BoiskoNaOsMikołajaKopernika: any;
  BoiskoNaOsPiastów: any;
  BoiskoNaOsSzumana2: any;
  BoiskoNaOsSzumana: any;
  BoiskoNaPlacuZabaw: any;
  BoiskoObokPolpharmy: any;
  BoiskoORLIKŻabno: any;
  BoiskoNaAleiJanaPawłaII3: any;
  BoiskoPrzyUlicyKsPiotraŚciegiennego: any;
  BoiskoNaUlicyPołudniowej: any;
  BoiskoPSP4: any;
  BoiskoPSP1: any;
  BoiskoPSP32DawnePG2: any;
  BoiskoPSP3: any;
  BoiskoPSP32: any;
  BoiskoPSP3DawnePG2: any;
  BoiskoPSP4AlejaJanaPawlaII: any;
  BoiskoPSP6: any;
  BoiskoPSP8: any;
  BoiskoWParkuRekreacyjnymAKUKU: any;
  BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku: any;
  BoiskoZSZ: any;
  HalaSportowaImGerardaPodolskiegoAGRO: any;
  MiejskaHalaSportowaImAndrzejaGrubbyOSiR: any;
  SalaGimnastycznaILiceumOgólnokształcące: any;
  SalaGimnastycznaIILiceumOgólnokształcące: any;
  SalaGimnastycznaMOS: any;
  SalaGimnastycznaPSP1: any;
  SalaGimnastycznaPSP32: any;
  SalaGimnastycznaPSP3: any;
  SalaGimnastycznaPSP4: any;
  SalaGimnastycznaPSP8: any;
  SalaGimnastycznaZSE: any;

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
    this.ObliczKilometry(53.978171, 18.537196, "BoiskoDoKoszykówkiPrzyUlTrauguta")
    this.ObliczKilometry(53.957906, 18.530947, "BoiskoNaAleiJanaPawlaII2")
    this.ObliczKilometry(53.957856, 18.530586, "BoiskoNaAleiJanaPawlaII")
    this.ObliczKilometry(53.961969, 18.522381, "BoiskoNaOs60Lecia2")
    this.ObliczKilometry(53.963644, 18.523914, "BoiskoNaOs60lecia")
    this.ObliczKilometry(53.964561, 18.511589, "OsKonstytucji3goMaja2")
    this.ObliczKilometry(53.963770, 18.509677, "BoiskoNaOsKonstytucji3goMaja")
    this.ObliczKilometry(53.961813, 18.527325, "BoiskoNaOsMikołajaKopernika2")
    this.ObliczKilometry(53.958559, 18.528053, "BoiskoNaOsMikołajaKopernika")
    this.ObliczKilometry(53.961909, 18.499126, "BoiskoNaOsPiastów")
    this.ObliczKilometry(53.961512, 18.535393, "BoiskoNaOsSzumana2")
    this.ObliczKilometry(53.962505, 18.535623, "BoiskoNaOsSzumana")
    this.ObliczKilometry(53.970535, 18.515540, "BoiskoNaPiekiełkach")
    this.ObliczKilometry(53.977702, 18.521352, "BoiskoNaPlacuZabaw")
    this.ObliczKilometry(53.960612, 18.537954, "BoiskoObokPolpharmy")
    this.ObliczKilometry(53.982639, 18.492626, "BoiskoORLIKŻabno")
    this.ObliczKilometry(53.958924, 18.530681, "BoiskoNaAleiJanaPawłaII3")
    this.ObliczKilometry(53.968644, 18.513225, "BoiskoPrzyUlicyKsPiotraŚciegiennego")
    this.ObliczKilometry(53.952400, 18.527250, "BoiskoNaUlicyPołudniowej")
    this.ObliczKilometry(53.957179, 18.533125, "BoiskoPSP4")
    this.ObliczKilometry(53.960918, 18.500472, "BoiskoPSP1")
    this.ObliczKilometry(53.972633, 18.537247, "BoiskoPSP32")
    this.ObliczKilometry(53.975121, 18.530976, "BoiskoPSP3")
    this.ObliczKilometry(53.971949, 18.536903, "BoiskoPSP3DawnePG2")
    this.ObliczKilometry(53.962934, 18.528891, "BoiskoPSP4AlejaJanaPawlaII")
    this.ObliczKilometry(53.983834, 18.492077, "BoiskoPSP6")
    this.ObliczKilometry(53.957562, 18.527770, "BoiskoPSP8")
    this.ObliczKilometry(53.982568, 18.502943, "BoiskoWParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.962593, 18.493185, "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.ObliczKilometry(53.966655, 18.533734, "BoiskoZSZ")
    this.ObliczKilometry(53.969677, 18.526001, "HalaSportowaImGerardaPodolskiegoAGRO")
    this.ObliczKilometry(53.970017, 18.535273, "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.ObliczKilometry(53.971029, 18.531611, "SalaGimnastycznaILiceumOgólnokształcące")
    this.ObliczKilometry(53.964967, 18.547153, "SalaGimnastycznaIILiceumOgólnokształcące")
    this.ObliczKilometry(53.971403, 18.531161, "SalaGimnastycznaMOS")
    this.ObliczKilometry(53.961259, 18.501102, "SalaGimnastycznaPSP1")
    this.ObliczKilometry(53.972769, 18.536707, "SalaGimnastycznaPSP32")
    this.ObliczKilometry(53.975370, 18.530597, "SalaGimnastycznaPSP3")
    this.ObliczKilometry(53.962934, 18.528891, "SalaGimnastycznaPSP4")
    this.ObliczKilometry(53.957562, 18.527770, "SalaGimnastycznaPSP8")
    this.ObliczKilometry(53.966320, 18.535633, "SalaGimnastycznaZSE")


    const miejsca: Miejsce[] =[
      { odleglosc: this.BoiskoOSIR,

          zdjecie: "../../assets/imgs/Boisko (OSiR)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko (OSiR)/3.jpg",

          Nazwa_Miejsca: "Boisko (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Akryl",
          Godziny_Otwarcia: `7:00 – 22:00`,
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"
        },
        
      { odleglosc: this.BoiskoDoKoszykówkiPrzyUlTrauguta,

        zdjecie: "../../assets/imgs/Boisko do koszykówki przy ul. Traugutta/1.jpg",
        zdjecie2: "../../assets/imgs/Boisko do koszykówki przy ul. Traugutta/2.jpg",
        zdjecie3: "../../assets/imgs/Boisko do koszykówki przy ul. Traugutta/3.jpg",

        Nazwa_Miejsca: "Boisko do koszykówki przy ul. Traugutta",
        Adres: "ul. Romualda Traugutta 39",
        Kategoria_Miejsca: "Boisko zewnętrzne",
        Dyscyplina: "Koszykówka",
        Nawierzchnia: "Kostka brukowa",
        Godziny_Otwarcia: "06:00 – 22:00",
        Koszt: "Bezpłatne",
        Strona_Internetowa: "-",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'41.4%22N+18%C2%B032'13.9%22E/@53.9781729,18.5358909,321m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.978171!4d18.537196"},
        
        { odleglosc: this.BoiskoNaAleiJanaPawlaII2,

        zdjecie: "../../assets/imgs/Boisko na Alei Jana Pawła II (2)/1.jpg",
        zdjecie2: "../../assets/imgs/Boisko na Alei Jana Pawła II (2)/2.jpg",
        zdjecie3: "../../assets/imgs/Boisko na Alei Jana Pawła II (2)/3.jpg",

        Nazwa_Miejsca: "Boisko na Alei Jana Pawła II (2)",
        Adres: "Al. Jana Pawła II 25",
        Kategoria_Miejsca: "Boisko zewnętrzne",
        Dyscyplina: "Koszykówka",
        Nawierzchnia: "Trawa naturalna",
        Godziny_Otwarcia: "6:00 – 22:00",
        Koszt: "Bezpłatne",
        Strona_Internetowa: "-",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B057'28.5%22N+18%C2%B031'51.4%22E/@53.9579091,18.5287583,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957906!4d18.530947"},
        
        { odleglosc: this.BoiskoNaAleiJanaPawlaII,

        zdjecie: "../../assets/imgs/Boisko na Alei Jana Pawła II/1.jpg",
        zdjecie2: "../../assets/imgs/Boisko na Alei Jana Pawła II/2.jpg",
        zdjecie3: "../../assets/imgs/Boisko na Alei Jana Pawła II/3.jpg",

        Nazwa_Miejsca: "Boisko na Alei Jana Pawła II",
        Adres: "Al. Jana Pawła II 31",
        Kategoria_Miejsca: "Boisko zewnętrzne",
        Dyscyplina: "Koszykówka",
        Nawierzchnia: "Trawa naturalna",
        Godziny_Otwarcia: "6:00 – 22:00",
        Koszt: "Bezpłatne",
        Strona_Internetowa: "-",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B057'28.3%22N+18%C2%B031'50.1%22E/@53.9578591,18.5283973,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957856!4d18.530586"},
          
        { odleglosc: this.BoiskoNaOs60Lecia2,

          zdjecie: "../../assets/imgs/Boisko na Os. 60-lecia (2)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. 60-lecia (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. 60-lecia (2)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. 60-lecia (2)",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 2",
          Kategoria_Miejsca: "Boisko wielofunkcyjne",
          Dyscyplina: "Koszykówka; Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'43.1%22N+18%C2%B031'20.6%22E/@53.9619721,18.5201923,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961969!4d18.522381"},
        
          { odleglosc: this.BoiskoNaOs60lecia,

          zdjecie: "../../assets/imgs/Boisko na Os. 60-lecia/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. 60-lecia/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. 60-lecia/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. 60-lecia",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 2",
          Kategoria_Miejsca: "Boisko wielofunkcyjne",
          Dyscyplina: "Koszykówka; Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.1%22N+18%C2%B031'26.1%22E/@53.9636471,18.5217253,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963644!4d18.523914"},
          
          { odleglosc: this.OsKonstytucji3goMaja2,

          zdjecie: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja (2)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja (2)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Konstytucji 3-go Maja (2)",
          Adres: "Os. Konstytucji 3-go Maja 14",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'52.4%22N+18%C2%B030'41.7%22E/@53.9645641,18.5094003,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964561!4d18.511589"},
          
          { odleglosc: this.BoiskoNaOsKonstytucji3goMaja,

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

          { odleglosc: this.BoiskoNaOsMikołajaKopernika2,

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

          { odleglosc: this.BoiskoNaOsMikołajaKopernika,

          zdjecie: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 27",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'30.8%22N+18%C2%B031'41.0%22E/@53.9585608,18.5268177,304m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958559!4d18.528053"},

          { odleglosc: this.BoiskoNaOsPiastów,

          zdjecie: "../../assets/imgs/Boisko na Os. Piastów/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Piastów/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Piastów/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Piastów",
          Adres: "Os. Piastów 7",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Kostka brukowa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.9%22N+18%C2%B029'56.9%22E/@53.9619121,18.4969373,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961909!4d18.499126"},

          { odleglosc: this.BoiskoNaOsSzumana2,

          zdjecie: "../../assets/imgs/Boisko na Os. Szumana (2)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Szumana (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Szumana (2)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Szumana (2)",
          Adres: "Os. Księdza Henryka Szumana 13",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Kostka brukowa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.4%22N+18%C2%B032'07.4%22E/@53.9615151,18.5332043,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961512!4d18.535393"},

          { odleglosc: this.BoiskoNaOsSzumana,

          zdjecie: "../../assets/imgs/Boisko na Os. Szumana/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Os. Szumana/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Szumana/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Szumana",
          Adres: "Os. Księdza Henryka Szumana 1",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.0%22N+18%C2%B032'08.2%22E/@53.9625081,18.5334343,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962505!4d18.535623"},

          { odleglosc: this.BoiskoNaPiekiełkach,

          zdjecie: "../../assets/imgs/Boisko na Piekiełkach/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Piekiełkach/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Piekiełkach/3.jpg",

          Nazwa_Miejsca: "Boisko na Piekiełkach",
          Adres: "Władysława Jagiełły 29",
          Kategoria_Miejsca: "Boisko  zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'13.9%22N+18%C2%B030'55.9%22E/@53.9705381,18.5133513,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970535!4d18.51554"},

          { odleglosc: this.BoiskoNaPlacuZabaw,

          zdjecie: "../../assets/imgs/Boisko na placu zabaw/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na placu zabaw/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na placu zabaw/3.jpg",

          Nazwa_Miejsca: "Boisko na placu zabaw",
          Adres: "Sadowa 6 - 10",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Beton",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'39.7%22N+18%C2%B031'16.9%22E/@53.9777051,18.5191633,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977702!4d18.521352"},

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

          { odleglosc: this.BoiskoORLIKŻabno,

          zdjecie: "../../assets/imgs/Boisko ORLIK Żabno/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko ORLIK Żabno/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko ORLIK Żabno/3.jpg",

          Nazwa_Miejsca: "Boisko ORLIK Żabno",
          Adres: "Ks. Franciszka Kalinowskiego 28",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Siatkówka",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: `
              Marzec – Kwiecień
              Pon. - Pt.: 17:00 – 20:00
              Sob. - Ndz.: 14:00 – 21:30

              Maj – Październik
              Pon. - Pt.: 17:0 – 21:30
              Sob.- Ndz.: 14:00 – 21:30

              Listopad – Luty
              Zamknięte`,
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.5%22N+18%C2%B029'33.5%22E/@53.9826421,18.4904373,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982639!4d18.492626"},

          { odleglosc: this.BoiskoNaAleiJanaPawłaII3,

          zdjecie: "../../assets/imgs/Boisko na Alei Jana Pawła II (3)/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na Alei Jana Pawła II (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Alei Jana Pawła II (3)/3.jpg",

          Nazwa_Miejsca: "Boisko przy Alei Jana Pawła II (3)",
          Adres: "Al. Jana Pawła II 15A",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Kostka brukowa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'32.1%22N+18%C2%B031'50.5%22E/@53.9589271,18.5284923,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958924!4d18.530681"},
      
          { odleglosc: this.BoiskoPrzyUlicyKsPiotraŚciegiennego,

          zdjecie: "../../assets/imgs/Boisko przy ulicy Ks. Piotra Ściegiennego/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko przy ulicy Ks. Piotra Ściegiennego/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko przy ulicy Ks. Piotra Ściegiennego/3.jpg",

          Nazwa_Miejsca: "Boisko przy ulicy Ks. Piotra Ściegiennego",
          Adres: "Ks. Piotra Ściegiennego 24",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'07.1%22N+18%C2%B030'47.6%22E/@53.9686471,18.5110363,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.968644!4d18.513225"},

          { odleglosc: this.BoiskoNaUlicyPołudniowej,

          zdjecie: "../../assets/imgs/Boisko na ulicy Południowej/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko na ulicy Południowej/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na ulicy Południowej/3.jpg",

          Nazwa_Miejsca: "Boisko przy ulicy Południowej",
          Adres: "Południowa 40",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'08.6%22N+18%C2%B031'38.1%22E/@53.9528967,18.5245567,659m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d53.9524!4d18.52725"},

          { odleglosc: this.BoiskoPSP4,

          zdjecie: "../../assets/imgs/Boisko PSP 4/1.jpg",
          zdjecie2: "../../assets/imgs/Boisko PSP 4/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP 4/3.jpg",

          Nazwa_Miejsca: "Boisko PSP 4",
          Adres: "Henryka Sienkiewicza 19 ",
          Kategoria_Miejsca: "Boisko do koszykówki",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'25.8%22N+18%C2%B031'59.3%22E/@53.9571821,18.5309363,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957179!4d18.533125"},

          { odleglosc: this.BoiskoPSP1,

            zdjecie: "../../assets/imgs/Boisko PSP1/1.jpg",
            zdjecie2: "../../assets/imgs/Boisko PSP1/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP1/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP1",
            Adres: "Zblewska 18",
            Kategoria_Miejsca: "Boisko zewnętrzne",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Asfalt",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B057'39.3%22N+18%C2%B030'01.7%22E/@53.9609211,18.4982833,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960918!4d18.500472"},

          { odleglosc: this.BoiskoPSP32,

            zdjecie: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/1.jpg",
            zdjecie2: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP3 (2)",
            Adres: "Traugutta 2",
            Kategoria_Miejsca: "Boisko zewnętrzne",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Asfalt",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'21.5%22N+18%C2%B032'14.1%22E/@53.9726361,18.5350583,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972633!4d18.537247"},
          
            { odleglosc: this.BoiskoPSP3,

            zdjecie: "../../assets/imgs/Boisko PSP3/1.jpg",
            zdjecie2: "../../assets/imgs/Boisko PSP3/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP3/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP3",
            Adres: "Wybickiego 17",
            Kategoria_Miejsca: "Boisko zewnętrzne (2)",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Asfalt",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'30.4%22N+18%C2%B031'51.5%22E/@53.9751241,18.5287873,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975121!4d18.530976"},
          
            { odleglosc: this.BoiskoPSP3DawnePG2,

            zdjecie: "../../assets/imgs/Boisko PSP3 (dawne PG2)/1.jpg",
            zdjecie2: "../../assets/imgs/Boisko PSP3 (dawne PG2)/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP3 (dawne PG2)/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP3 (dawne PG2)",
            Adres: "Traugutta 2",
            Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
            Dyscyplina: "Koszykówka; Tenis ziemny",
            Nawierzchnia: "Tartan",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatny (Możliwość rezerwacji)",
            Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'19.0%22N+18%C2%B032'12.9%22E/@53.9719521,18.5347143,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971949!4d18.536903"},

            { odleglosc: this.BoiskoPSP4AlejaJanaPawlaII,

              zdjecie: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II/1.jpg",
              zdjecie2: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II/2.jpg",
              zdjecie3: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II/3.jpg",
    
              Nazwa_Miejsca: "Boisko PSP4 aleja Jana Pawła II",
              Adres: "Aleja Jana Pawła II ",
              Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
              Dyscyplina: "Koszykówka",
              Nawierzchnia: "Tartan",
              Godziny_Otwarcia: "6:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://czworkastg.edupage.org/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},

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
              Adres: "Al. Jana Pawła II 10",
              Kategoria_Miejsca: "Boisko zewnętrzne",
              Dyscyplina: "Koszykówka",
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
              Dyscyplina: "Koszykówka",
              Nawierzchnia: "Beton",
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
              Dyscyplina: "Koszykówka",
              Nawierzchnia: "Kostka brukowa",
              Godziny_Otwarcia: "7:00 – 21:00",
              Koszt: "Bezpłatne",
              Strona_Internetowa: "-",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.3%22N+18%C2%B029'35.5%22E/@53.9625961,18.4909963,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962593!4d18.493185"},
           
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

            { odleglosc: this.HalaSportowaImGerardaPodolskiegoAGRO,

              zdjecie: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/1.jpg",
              zdjecie2: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/2.jpg",
              zdjecie3: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/3.jpg",
    
              Nazwa_Miejsca: "Hala sportowa im. Gerarda Podolskiego (AGRO)",
              Adres: "Generała Józefa Hallera 19A",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Piłka ręczna; Piłka nożna; Sporty siłowe; Gimnastyka;  Boks; Kickboxing; Aikido; Brazylijskie Jujitsu; Kali Eskrima; Karate; Lekkoatletyka",
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
              Kategoria_Miejsca: "Sala gimnastycza",
              Dyscyplina: "Koszykówka; Siatkówka; Tenis ziemny; Piłka ręczna; Piłka nożna; Sporty siłowe;Gimnastyka; Fitness",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "7:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "http://osir.com.pl/obiekty/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
           
            { odleglosc: this.SalaGimnastycznaILiceumOgólnokształcące,

              zdjecie: "../../assets/imgs/Sala gimnastyczna I Liceum Ogólnokształcące/1.jpg",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna I Liceum Ogólnokształcące/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna I Liceum Ogólnokształcące/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna I Liceum Ogólnokształcące",
              Adres: "Józefa Hallera 34",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet gumowy",
              Godziny_Otwarcia: "15:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "http://www.lo.internetdsl.pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'15.7%22N+18%C2%B031'53.8%22E/@53.9710321,18.5294223,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971029!4d18.531611"},
      
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
              Koszt:  "Potrzeba rezerwacji",
              Strona_Internetowa: "http://www.2lo.stg.pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'53.9%22N+18%C2%B032'49.8%22E/@53.9649701,18.5449643,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964967!4d18.547153"},
            
            { odleglosc: this.SalaGimnastycznaMOS,

              zdjecie: "../../assets/imgs/Sala gimnastyczna MOS/1.jpg",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna MOS/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna MOS/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna MOS",
              Adres: "Józefa Hallera 36",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka; Boks, Kick-boxing",
              Nawierzchnia: "Parkiet gumowy",
              Godziny_Otwarcia: "15:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "http://mosstarogard.pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'17.1%22N+18%C2%B031'52.2%22E/@53.9714061,18.5289723,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971403!4d18.531161"},
              
            { odleglosc: this.SalaGimnastycznaPSP1,

              zdjecie: "../../assets/imgs/Sala gimnastyczna PSP1/1.jpg",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP1/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP1/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP1",
              Adres: "Zblewska 18",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "16:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'40.5%22N+18%C2%B030'04.0%22E/@53.9612621,18.4989133,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961259!4d18.501102"},
            
            { odleglosc: this.SalaGimnastycznaPSP32,

              zdjecie: "../../assets/imgs/Sala gimnastyczna PSP3 (dawne PG2)/1.jpg",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3 (dawne PG2)/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3 (dawne PG2)/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP3 (2)",
              Adres: "Traugutta 2",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "16:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'22.0%22N+18%C2%B032'12.2%22E/@53.9727721,18.5345183,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972769!4d18.536707"},
          
            { odleglosc: this.SalaGimnastycznaPSP3,

              zdjecie: "../../assets/imgs/Sala gimnastyczna PSP3/1.jpg",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP3",
              Adres: "Wybickiego 17",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "16:00 – 22:00",
              Koszt: "Bezpłatne",
              Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'31.3%22N+18%C2%B031'50.2%22E/@53.9753731,18.5284083,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97537!4d18.530597"},
            
            { odleglosc: this.SalaGimnastycznaPSP4,

              zdjecie: "../../assets/imgs/Sala gimnastyczna PSP4/1.jpg",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP4/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP4/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP4",
              Adres: "Aleja Jana Pawła II 4",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "7:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://czworkastg.edupage.org/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
            
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
    if(WYNIK == "BoiskoOSIR")
      this.BoiskoOSIR = this.kilometry

    if(WYNIK == "BoiskoDoKoszykówkiPrzyUlTrauguta")
      this.BoiskoDoKoszykówkiPrzyUlTrauguta = this.kilometry

    if(WYNIK == "BoiskoNaAleiJanaPawlaII2")
      this.BoiskoNaAleiJanaPawlaII2 = this.kilometry

    if(WYNIK == "BoiskoNaAleiJanaPawlaII")
      this.BoiskoNaAleiJanaPawlaII = this.kilometry

    if(WYNIK == "BoiskoNaOs60Lecia2")
      this.BoiskoNaOs60Lecia2 = this.kilometry

    if(WYNIK == "BoiskoNaOs60lecia")
    this.BoiskoNaOs60lecia = this.kilometry

    if(WYNIK == "OsKonstytucji3goMaja2")
    this.OsKonstytucji3goMaja2 = this.kilometry

    if(WYNIK == "BoiskoNaOsKonstytucji3goMaja")
    this.BoiskoNaOsKonstytucji3goMaja = this.kilometry

    if(WYNIK == "BoiskoNaOsMikołajaKopernika2")
    this.BoiskoNaOsMikołajaKopernika2 = this.kilometry

    if(WYNIK == "BoiskoNaOsMikołajaKopernika")
    this.BoiskoNaOsMikołajaKopernika = this.kilometry

    if(WYNIK == "BoiskoNaOsPiastów")
    this.BoiskoNaOsPiastów = this.kilometry

    if(WYNIK == "BoiskoNaOsSzumana2")
    this.BoiskoNaOsSzumana2 = this.kilometry

    if(WYNIK == "BoiskoNaOsSzumana")
    this.BoiskoNaOsSzumana = this.kilometry

    if(WYNIK == "BoiskoNaPiekiełkach")
    this.BoiskoNaPiekiełkach = this.kilometry

    if(WYNIK == "BoiskoNaPlacuZabaw")
    this.BoiskoNaPlacuZabaw = this.kilometry

    if(WYNIK == "BoiskoObokPolpharmy")
    this.BoiskoObokPolpharmy = this.kilometry

    if(WYNIK == "BoiskoORLIKŻabno")
    this.BoiskoORLIKŻabno = this.kilometry

    if(WYNIK == "BoiskoNaAleiJanaPawłaII3")
    this.BoiskoNaAleiJanaPawłaII3 = this.kilometry

    if(WYNIK == "BoiskoPrzyUlicyKsPiotraŚciegiennego")
    this.BoiskoPrzyUlicyKsPiotraŚciegiennego = this.kilometry

    if(WYNIK == "BoiskoNaUlicyPołudniowej")
    this.BoiskoNaUlicyPołudniowej = this.kilometry

    if(WYNIK == "BoiskoPSP4")
    this.BoiskoPSP4 = this.kilometry

    if(WYNIK == "BoiskoPSP1")
    this.BoiskoPSP1 = this.kilometry

    if(WYNIK == "BoiskoPSP32")
    this.BoiskoPSP32 = this.kilometry

    if(WYNIK == "BoiskoPSP3")
    this.BoiskoPSP3 = this.kilometry

    if(WYNIK == "BoiskoPSP3DawnePG2")
    this.BoiskoPSP3DawnePG2 = this.kilometry

    if(WYNIK == "BoiskoPSP4AlejaJanaPawlaII")
    this.BoiskoPSP4AlejaJanaPawlaII = this.kilometry

    if(WYNIK == "BoiskoPSP6")
    this.BoiskoPSP6 = this.kilometry

    if(WYNIK == "BoiskoPSP8")
    this.BoiskoPSP8 = this.kilometry

    if(WYNIK == "BoiskoWParkuRekreacyjnymAKUKU")
    this.BoiskoWParkuRekreacyjnymAKUKU = this.kilometry

    if(WYNIK == "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku = this.kilometry

    if(WYNIK == "BoiskoZSZ")
    this.BoiskoZSZ = this.kilometry

    if(WYNIK == "HalaSportowaImGerardaPodolskiegoAGRO")
    this.HalaSportowaImGerardaPodolskiegoAGRO = this.kilometry

    if(WYNIK == "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR = this.kilometry

    if(WYNIK == "SalaGimnastycznaILiceumOgólnokształcące")
    this.SalaGimnastycznaILiceumOgólnokształcące = this.kilometry

    if(WYNIK == "SalaGimnastycznaIILiceumOgólnokształcące")
    this.SalaGimnastycznaIILiceumOgólnokształcące = this.kilometry

    if(WYNIK == "SalaGimnastycznaMOS")
    this.SalaGimnastycznaMOS = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP1")
    this.SalaGimnastycznaPSP1 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP32")
    this.SalaGimnastycznaPSP32 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP3")
    this.SalaGimnastycznaPSP3 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP4")
    this.SalaGimnastycznaPSP4 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP8")
    this.SalaGimnastycznaPSP8 = this.kilometry

    if(WYNIK == "SalaGimnastycznaZSE")
    this.SalaGimnastycznaZSE = this.kilometry



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