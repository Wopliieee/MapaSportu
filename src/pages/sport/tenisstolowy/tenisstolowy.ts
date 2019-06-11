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
  selector: 'page-tenisstolowy',
  templateUrl: 'tenisstolowy.html',
})
export class TenisstolowyPage {
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
  SalaGimnastycznaPSP32: any;
  StółDoGryWPingPongaNaAleiJanaPawłaII: any;
  StółDoGryWPingPongaNaOs60lecia: any;
  StółDoPingPongaNaOs60lecia2: any;
  StółDoGryWPingPongaNaOsKonstytucji3goMaja: any;
  StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku: any;
  StółDoGryWPingPongaNaOsMikołajaKopernika: any;
  StółDoPingPongaNaOsKonstytucji3goMaja2: any;
  StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego: any;
  StółdogrywpingpongaWParkuRekreacyjnymAKUKU: any;
  StółdogrywpingpongaprzyulTraugutta: any;
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

    this.ObliczKilometry(53.972733, 18.536966, "SalaGimnastycznaPSP32")
    this.ObliczKilometry(53.957883, 18.530672, "StółDoGryWPingPongaNaAleiJanaPawłaII")
    this.ObliczKilometry(53.963771, 18.523742, "StółDoGryWPingPongaNaOs60lecia")
    this.ObliczKilometry(53.961841, 18.522213, "StółDoPingPongaNaOs60lecia2")
    this.ObliczKilometry(53.964545, 18.511944, "StółDoGryWPingPongaNaOsKonstytucji3goMaja")
    this.ObliczKilometry(53.962552, 18.492815, "StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.ObliczKilometry(53.959797, 18.527130, "StółDoGryWPingPongaNaOsMikołajaKopernika")
    this.ObliczKilometry(53.964178, 18.513076, "StółDoPingPongaNaOsKonstytucji3goMaja2")
    this.ObliczKilometry(53.968830, 18.513343, "StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego")
    this.ObliczKilometry(53.982568, 18.502943, "StółdogrywpingpongaWParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.978171, 18.537196, "StółdogrywpingpongaprzyulTraugutta")
    this.ObliczKilometry(53.973069, 18.542568, "PlaczabawFikumiku")

    const miejsca: Miejsce[] =[
      { odleglosc: this.SalaGimnastycznaPSP32,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3 (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3 (3)/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP3 (3)",
          Adres: "Traugutta 2",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Gimnastyka; Tenis stołowy",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'21.8%22N+18%C2%B032'13.1%22E/@53.9727361,18.5347773,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972733!4d18.536966"},
        
        { odleglosc: this.StółDoGryWPingPongaNaAleiJanaPawłaII,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58420337_329197661116959_7182378490891599872_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=355de984b29e8cba99bd63c7117bb25b&oe=5D688BCC",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Alei Jana Pawła II/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Alei Jana Pawła II/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Alei Jana Pawła II",
          Adres: "Al. Jana Pawła II 25",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'28.4%22N+18%C2%B031'50.4%22E/@53.9606151,18.5357653,538m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d53.957883!4d18.530672"},
        
        { odleglosc: this.StółDoGryWPingPongaNaOs60lecia,

          // zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58382083_323064771690826_7753168494794899456_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=3af7f744eb1830842b23f39152e2ac1f&oe=5D2E4BCA",
          // zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Os. 60-lecia/2.jpg",
          // zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Os. 60-lecia/3.jpg",
          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58382083_323064771690826_7753168494794899456_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=3af7f744eb1830842b23f39152e2ac1f&oe=5D2E4BCA",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58462119_1009615909235649_4498498739526172672_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=eba5661b889b870d46bf2a9a17b086e1&oe=5D6F5712",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59064631_406711220183121_1500196569998163968_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=ce71f344a67c315d2bc2ef298ff7365c&oe=5D682E78",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Os. 60-lecia",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 2",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.6%22N+18%C2%B031'25.5%22E/@53.9637741,18.5215533,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963771!4d18.523742"},
        
        { odleglosc: this.StółDoPingPongaNaOs60lecia2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58895183_992181727644168_1538142799331852288_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=fef3b064099550b6f59cacdb1ed96e12&oe=5D709ADA",
          zdjecie2: "../../assets/imgs/Stół do ping-ponga na Os. 60-lecia (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do ping-ponga na Os. 60-lecia (2)/3.jpg",

          Nazwa_Miejsca: "Stół do ping-ponga na Os. 60-lecia (2)",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 9",
          Kategoria_Miejsca: "Stół do ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.6%22N+18%C2%B031'20.0%22E/@53.9618441,18.5200243,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961841!4d18.522213"},
        
        { odleglosc: this.StółDoGryWPingPongaNaOsKonstytucji3goMaja,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59691394_444599389630729_4267899003351334912_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=a86c2d62c71faa71f568b02396006be9&oe=5D5D88BD",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Os. Konstytucji 3-go Maja/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Os. Konstytucji 3-go Maja/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Os. Konstytucji 3-go Maja",
          Adres: "Os. Konstytucji 3-go Maja 22",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'52.4%22N+18%C2%B030'43.0%22E/@53.9645481,18.5097553,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964545!4d18.511944"},
        
        { odleglosc: this.StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58441249_655041334968620_9087564861717610496_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=77d1b88f026fac08625818b9947e701a&oe=5D2BFA31",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga przy Rodzinnym Parku Edukacji Sportowej i Wypoczynku/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga przy Rodzinnym Parku Edukacji Sportowej i Wypoczynku/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga przy Rodzinnym Parku Edukacji Sportowej i Wypoczynku",
          Adres: "Nierzwickiego 18",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.2%22N+18%C2%B029'34.1%22E/@53.9625551,18.4906263,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962552!4d18.492815"},
        
        { odleglosc: this.StółDoGryWPingPongaNaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58383334_579468612564979_2826886623130550272_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=ba5e2860b1233e28026b7aa5e3850c22&oe=5D61017A",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 23",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'35.3%22N+18%C2%B031'37.7%22E/@53.9598001,18.5249413,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.959797!4d18.52713"},
        
        { odleglosc: this.StółDoPingPongaNaOsKonstytucji3goMaja2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59717237_2051032538526652_2133297147683012608_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=49051238ad13fecf041e04041bebd421&oe=5D68884A",
          zdjecie2: "../../assets/imgs/Stół do ping-ponga na Os. Konstytucji 3-go Maja (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do ping-ponga na Os. Konstytucji 3-go Maja (2)/3.jpg",

          Nazwa_Miejsca: "Stół do ping-ponga na Os. Konstytucji 3-go Maja (2)",
          Adres: "Os. Konstytucji 3-go Maja 6",
          Kategoria_Miejsca: "Stół do ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'51.0%22N+18%C2%B030'47.1%22E/@53.9641811,18.5108873,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964178!4d18.513076"},
        
        { odleglosc: this.StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58805603_445539642848790_6344453753243959296_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=2ca4552183b75a035554fef152219376&oe=5D610402",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga przy ulicy Ks. Piotra Ściegiennego/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga przy ulicy Ks. Piotra Ściegiennego/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga przy ulicy Ks. Piotra Ściegiennego",
          Adres: "Ks. Piotra Ściegiennego 24",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'07.8%22N+18%C2%B030'48.0%22E/@53.9688364,18.5111446,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.9688333!4d18.5133333"},
        
        { odleglosc: this.StółdogrywpingpongaWParkuRekreacyjnymAKUKU,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59383509_1120697674798889_116428106603954176_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=3615ed97a1aee7ec5a63d6be94e76d1c&oe=5D2BE2FB",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga w Parku Rekreacyjnym AKUKU/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga w Parku Rekreacyjnym AKUKU/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga w Parku Rekreacyjnym AKUKU",
          Adres: "Stanisława Kryzana 14",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},
        
        { odleglosc: this.StółdogrywpingpongaprzyulTraugutta,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58543201_2403639386588739_7897298766795898880_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=ea38bcc0bd23ecac53fae1fa14039f7e&oe=5D5BD872",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga przy ul. Traugutta/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga przy ul. Traugutta/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga przy ul. Traugutta",
          Adres: "ul. Romualda Traugutta 38",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "06:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'41.4%22N+18%C2%B032'13.9%22E/@53.9781729,18.5358909,321m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.978171!4d18.537196"},
        
          { odleglosc: this.PlaczabawFikumiku,

            zdjecie: '../../assets/imgs/Stół na placu zabaw Fiku-miku/1.jpg',
            zdjecie2: '../../assets/imgs/Stół na placu zabaw Fiku-miku/2.jpg',
            zdjecie3: '../../assets/imgs/Stół na placu zabaw Fiku-miku/3.jpg',
  
            Nazwa_Miejsca: 'Stół na placu zabaw "Fiku-miku"',
            Adres: "ul. Jana Buchholtza 6",
            Kategoria_Miejsca: "Stół do tenisa stołowego",
            Dyscyplina: "Tenis stołowy",
            Nawierzchnia: "-",
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

    if(WYNIK == "SalaGimnastycznaPSP32")
      this.SalaGimnastycznaPSP32 = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaAleiJanaPawłaII")
      this.StółDoGryWPingPongaNaAleiJanaPawłaII = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaOs60lecia")
      this.StółDoGryWPingPongaNaOs60lecia = this.kilometry
    if(WYNIK == "StółDoPingPongaNaOs60lecia2")
      this.StółDoPingPongaNaOs60lecia2 = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaOsKonstytucji3goMaja")
      this.StółDoGryWPingPongaNaOsKonstytucji3goMaja = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku")
      this.StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaOsMikołajaKopernika")
      this.StółDoGryWPingPongaNaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "StółDoPingPongaNaOsKonstytucji3goMaja2")
      this.StółDoPingPongaNaOsKonstytucji3goMaja2 = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego")
      this.StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego = this.kilometry
    if(WYNIK == "StółdogrywpingpongaWParkuRekreacyjnymAKUKU")
      this.StółdogrywpingpongaWParkuRekreacyjnymAKUKU = this.kilometry
    if(WYNIK == "StółdogrywpingpongaprzyulTraugutta")
      this.StółdogrywpingpongaprzyulTraugutta = this.kilometry
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