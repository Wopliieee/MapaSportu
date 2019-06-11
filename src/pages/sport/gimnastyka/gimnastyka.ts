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
  selector: 'page-gimnastyka',
  templateUrl: 'gimnastyka.html',
})
export class GimnastykaPage {
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
  SalaGimnastycznaZSE: any;
  SalaGimnastycznaPSP8: any;
  SalaGimnastycznaPSP4: any;
  SalagimnastycznaPSP33: any;
  SalaGimnastycznaPSP3: any;
  SalagimnastycznaPSP32: any;
  SalaGimnastycznaPSP1: any;
  SalaGimnastycznaMOS: any;
  SalaGimnastycznaILiceumOgólnokształcące: any;
  MiejskaHalaSportowaImAndrzejaGrubbyOSiR: any;
  HalaSportowaImGerardaPodolskiegoAGRO: any;
  SalagimnastycznaPSP1filia: any;


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

    this.ObliczKilometry(53.969677, 18.526001, "HalaSportowaImGerardaPodolskiegoAGRO")
    this.ObliczKilometry(53.970017, 18.535273, "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.ObliczKilometry(53.971029, 18.531611, "SalaGimnastycznaILiceumOgólnokształcące")
    this.ObliczKilometry(53.971403, 18.531161, "SalaGimnastycznaMOS")
    this.ObliczKilometry(53.961259, 18.501102, "SalaGimnastycznaPSP1")
    this.ObliczKilometry(53.972733, 18.536966, "SalagimnastycznaPSP32")
    this.ObliczKilometry(53.975370, 18.530597, "SalaGimnastycznaPSP3")
    this.ObliczKilometry(53.972769, 18.536707, "SalagimnastycznaPSP33")
    this.ObliczKilometry(53.962934, 18.528891, "SalaGimnastycznaPSP4")
    this.ObliczKilometry(53.957562, 18.527770, "SalaGimnastycznaPSP8")
    this.ObliczKilometry(53.966320, 18.535633, "SalaGimnastycznaZSE")
    this.ObliczKilometry(53.966306, 18.519750, "SalagimnastycznaPSP1filia")

    const miejsca: Miejsce[] =[
      { odleglosc: this.HalaSportowaImGerardaPodolskiegoAGRO,

        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59519045_576585839518008_3379895599867363328_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=b9e47dd47294b8d8ccdfd557f1a30f56&oe=5D688E56",
        zdjecie2: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/2.jpg",
        zdjecie3: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/3.jpg",

        Nazwa_Miejsca: "Hala sportowa im. Gerarda Podolskiego (AGRO) ",
        Adres: "Generała Józefa Hallera 19A ",
        Kategoria_Miejsca: "Sala gimnastyczna ",
        Dyscyplina: "Koszykówka; Piłka ręczna; Piłka nożna; Sporty siłowe; Gimnastyka;  Boks; Kickboxing; Aikido; Brazylijskie Jujitsu; Kali Eskrima; Karate; Lekkoatletyka ",
        Nawierzchnia: "Parkiet drewniany ",
        Godziny_Otwarcia: "Czynne całą dobę ",
        Koszt: "Potrzeba rezerwacji ",
        Strona_Internetowa: "https://starogard.pl/lokalizacje/hala-sportowa-im-gerarda-podolskiego/ ",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'10.8%22N+18%C2%B031'33.6%22E/@53.9696801,18.5238123,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.969677!4d18.526001"},
      
      { odleglosc: this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58549574_2165665393528151_3939023251438567424_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=6f315a2d508caffb2e325af64b6e09c0&oe=5D71BF1B",
          zdjecie2: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/3.jpg",

          Nazwa_Miejsca: "Miejska Hala Sportowa im. Andrzeja Grubby (OSiR) ",
          Adres: "Olimpijczyków Starogardzkich 1 ",
          Kategoria_Miejsca: "Sala gimnastycza ",
          Dyscyplina: "Koszykówka; Siatkówka; Tenis ziemny; Piłka ręczna; Piłka nożna; Sporty siłowe;Gimnastyka; Fitness ",
          Nawierzchnia: "Parkiet drewniany ",
          Godziny_Otwarcia: "7:00 – 22:00 ",
          Koszt: "Potrzeba rezerwacji ",
          Strona_Internetowa: "http://osir.com.pl/obiekty/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
      
      { odleglosc: this.SalaGimnastycznaILiceumOgólnokształcące,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna I Liceum Ogólnokształcące/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna I Liceum Ogólnokształcące/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna I Liceum Ogólnokształcące ",
          Adres: "Józefa Hallera 34 ",
          Kategoria_Miejsca: "Sala gimnastyczna ",
          Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka ",
          Nawierzchnia: "Parkiet gumowy ",
          Godziny_Otwarcia: "15:00 – 22:00 ",
          Koszt: "Potrzeba rezerwacji ",
          Strona_Internetowa: "http://www.lo.internetdsl.pl/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'15.7%22N+18%C2%B031'53.8%22E/@53.9710321,18.5294223,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971029!4d18.531611"},
        
      { odleglosc: this.SalaGimnastycznaMOS,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285488_316953192310280_5264287233694760960_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=f5a2250dacd893040e022e441790e832&oe=5D656E95",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna MOS/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna MOS/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna MOS ",
          Adres: "Józefa Hallera 36 ",
          Kategoria_Miejsca: "Sala gimnastyczna ",
          Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka; Boks, Kick-boxing ",
          Nawierzchnia: "Parkiet gumowy ",
          Godziny_Otwarcia: "15:00 – 22:00 ",
          Koszt: "Potrzeba rezerwacji ",
          Strona_Internetowa: "http://mosstarogard.pl/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'17.1%22N+18%C2%B031'52.2%22E/@53.9714061,18.5289723,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971403!4d18.531161"},

      { odleglosc: this.SalaGimnastycznaPSP1,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59243937_883508015334863_102627822631124992_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=697d614a9ba33c6b38ebb23b8f6ad2b4&oe=5D5DE6A3",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP1/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP1/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP1 ",
          Adres: "Zblewska 18 ",
          Kategoria_Miejsca: "Sala gimnastyczna ",
          Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Siatkówka; Gimnastyka ",
          Nawierzchnia: "Parkiet drewniany ",
          Godziny_Otwarcia: "16:00 – 22:00 ",
          Koszt: "Potrzeba rezerwacji ",
          Strona_Internetowa: "https://psp1starogardgd.edupage.org/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'40.5%22N+18%C2%B030'04.0%22E/@53.9612621,18.4989133,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961259!4d18.501102"},
        
      { odleglosc: this.SalagimnastycznaPSP32,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3 (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3 (3)/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP3 (3)",
          Adres: "Traugutta 2 ",
          Kategoria_Miejsca: "Sala gimnastyczna ",
          Dyscyplina: "Gimnastyka; Tenis stołowy ",
          Nawierzchnia: "Parkiet drewniany ",
          Godziny_Otwarcia: "16:00 – 22:00 ",
          Koszt: "Potrzeba rezerwacji ",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'21.8%22N+18%C2%B032'13.1%22E/@53.9727361,18.5347773,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972733!4d18.536966"},
        
      { odleglosc: this.SalaGimnastycznaPSP3,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59849515_1101237386743169_964543822392459264_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=18fa2ac21b3f6f3afa4774e36400ba96&oe=5D6EB17F",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP3 ",
          Adres: "Wybickiego 17 ",
          Kategoria_Miejsca: "Sala gimnastyczna ",
          Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka ",
          Nawierzchnia: "Parkiet drewniany ",
          Godziny_Otwarcia: "16:00 – 22:00 ",
          Koszt: "Bezpłatne ",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/ ",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'31.3%22N+18%C2%B031'50.2%22E/@53.9753731,18.5284083,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97537!4d18.530597"},
      
      { odleglosc: this.SalagimnastycznaPSP33,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59774317_2321313668188562_1537739493312823296_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=80068743e4d8c4c33e0d7cbb486318ce&oe=5D74D094",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3 (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3 (2)/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP3 (2)",
          Adres: "Traugutta 2",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'22.0%22N+18%C2%B032'12.2%22E/@53.9727721,18.5345183,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972769!4d18.536707"},

      { odleglosc: this.SalaGimnastycznaPSP4,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60049073_477728662969120_6158547618549989376_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=b13f283569899b37e0080c6933c32c6a&oe=5D72B2FE",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP4/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP4/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna PSP4",
          Adres: "Aleja Jana Pawła II 4",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "16:00 - 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
      
      { odleglosc: this.SalaGimnastycznaPSP8,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
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

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60161939_373268329951436_1336134385568579584_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=04afb74fe3403f3229a6bd949c63b04a&oe=5D5E04D7",
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
        
      { odleglosc: this.SalagimnastycznaPSP1filia,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62339791_2829946233743253_2002428261518278656_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8d7bb29cad65c5c197e9bbe8b2d10e55&oe=5D51D741",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62230531_2436987163046177_3735550636079448064_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=0fe3297c1bfe9c0971b2391c5916d284&oe=5D98787A",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62454870_418559702207369_3967025132538429440_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=6fec4434a29d2dc9b0c3b40ee1c9cc53&oe=5D851DD8",

          Nazwa_Miejsca: "Sala gimnastyczna PSP1 (filia)",
          Adres: "2 Pułku Szwoleżerów Rokitniańskich 4",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka, siatkówka, gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "16:00 - 22:00",
          Koszt: "Bezpłatne (Potrzeba rezerwacji)",
          Strona_Internetowa: "http://psp1starogardgd.edupage.org/news/?",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B057'58.7%22N+18%C2%B031'11.1%22E/@53.9663072,18.5186557,18z/data=!3m1!4b1!4m13!1m6!3m5!1s0x47029b5f8762496d:0xd1f2455896a7bd86!2sPubliczne+Gimnazjum+nr+3+im.+Stanis%C5%82awa+Staszica!8m2!3d53.9659753!4d18.5193786!3m5!1s0x0:0x0!7e2!8m2!3d53.9663018!4d18.5197563"},

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
    if(WYNIK == "HalaSportowaImGerardaPodolskiegoAGRO")
    this.HalaSportowaImGerardaPodolskiegoAGRO = this.kilometry

  if(WYNIK == "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR = this.kilometry

  if(WYNIK == "SalaGimnastycznaILiceumOgólnokształcące")
    this.SalaGimnastycznaILiceumOgólnokształcące = this.kilometry
  
  if(WYNIK == "SalagimnastycznaPSP33")
    this.SalagimnastycznaPSP33 = this.kilometry

  if(WYNIK == "SalaGimnastycznaMOS")
    this.SalaGimnastycznaMOS = this.kilometry

  if(WYNIK == "SalaGimnastycznaPSP1")
    this.SalaGimnastycznaPSP1 = this.kilometry

  if(WYNIK == "SalagimnastycznaPSP32")
    this.SalagimnastycznaPSP32 = this.kilometry

  if(WYNIK == "SalaGimnastycznaPSP3")
    this.SalaGimnastycznaPSP3 = this.kilometry

  if(WYNIK == "SalaGimnastycznaPSP4")
    this.SalaGimnastycznaPSP4 = this.kilometry

  if(WYNIK == "SalaGimnastycznaPSP8")
    this.SalaGimnastycznaPSP8 = this.kilometry

  if(WYNIK == "SalaGimnastycznaZSE")
    this.SalaGimnastycznaZSE = this.kilometry

  if(WYNIK == "SalagimnastycznaPSP1filia")
    this.SalagimnastycznaPSP1filia = this.kilometry
    
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