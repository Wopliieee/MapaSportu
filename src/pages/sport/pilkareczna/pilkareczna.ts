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
  selector: 'page-pilkareczna',
  templateUrl: 'pilkareczna.html',
})
export class PilkarecznaPage {
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
  AdresBoiskoNaOsMikołajaKopernika: any;
  BoiskoPSP1: any;
  BoiskoPSP32: any;
  BoiskoPSP3: any;
  BoiskoPSP4AlejaJanaPawłaII: any;
  BoiskoPSP6: any;
  BoiskoPSP8: any;
  BoiskoZSZ: any;
  HalaSportowaImGerardaPodolskiegoAGRO: any;
  MiejskaHalaSportowaImAndrzejaGrubbyOSiR: any;
  SalaGimnastycznaIILiceumOgólnokształcące: any;
  SalaGimnastycznaPSP1: any;
  SalaGimnastycznaPSP8: any;
  SalaGimnastycznaZSE: any;
  BoiskoILO: any;
  BoiskoPSP1filia: any;
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

    this.ObliczKilometry(53.970017, 18.535273, "BoiskoOSIR")
    this.ObliczKilometry(53.961813, 18.527325, "AdresBoiskoNaOsMikołajaKopernika")
    this.ObliczKilometry(53.961578, 18.500123, "BoiskoPSP1")
    this.ObliczKilometry(53.975131, 18.531258, "BoiskoPSP32")
    this.ObliczKilometry(53.972787, 18.537366, "BoiskoPSP3")
    this.ObliczKilometry(53.962934, 18.528891, "BoiskoPSP4AlejaJanaPawłaII")
    this.ObliczKilometry(53.983834, 18.492077, "BoiskoPSP6")
    this.ObliczKilometry(53.957562, 18.527770, "BoiskoPSP8")
    this.ObliczKilometry(53.966655, 18.533734, "BoiskoZSZ")
    this.ObliczKilometry(53.969677, 18.526001, "HalaSportowaImGerardaPodolskiegoAGRO")
    this.ObliczKilometry(53.970017, 18.535273, "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.ObliczKilometry(53.964967, 18.547153, "SalaGimnastycznaIILiceumOgólnokształcące")
    this.ObliczKilometry(53.961259, 18.501102, "SalaGimnastycznaPSP1")
    this.ObliczKilometry(53.957562, 18.527770, "SalaGimnastycznaPSP8")
    this.ObliczKilometry(53.966320, 18.535633, "SalaGimnastycznaZSE")
    this.ObliczKilometry(53.971048, 18.531133, "BoiskoILO")
    this.ObliczKilometry(53.966475, 18.519187, "BoiskoPSP1filia")
    this.ObliczKilometry(53.966306, 18.519750, "SalagimnastycznaPSP1filia")

    const miejsca: Miejsce[] =[
      { odleglosc: this.BoiskoOSIR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59410583_355557525073206_7708766246715523072_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=a4a1d0cc93d817ffce20ad5566c0e014&oe=5D6F0D37",
          zdjecie2: "../../assets/imgs/Boisko (OSiR) (4)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko (OSiR) (4)/3.jpg",

          Nazwa_Miejsca: "Boisko (OSiR) (4)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Akryl",
          Godziny_Otwarcia: `7:00 – 22:00`,
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"
        },
      
      { odleglosc: this.AdresBoiskoNaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58378903_352122728764906_4348086472264384512_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=8bb70dc174e27185b8e7a91938f534c9&oe=5D6E4D00",
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

      { odleglosc: this.BoiskoPSP1,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59188968_638035613289639_5888665737823780864_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=a2568095962bdabae0cc97faae8de961&oe=5D2D35CC",
          zdjecie2: "../../assets/imgs/Boisko PSP1 (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP1 (2)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP1 (2)",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.7%22N+18%C2%B030'00.4%22E/@53.9615811,18.4979343,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961578!4d18.500123"},
 
      { odleglosc: this.BoiskoPSP32,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59387063_1099253716927620_3578788238195687424_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=bd94a1357db6484d69fc13d3577b8726&oe=5D77D36B",
          zdjecie2: "../../assets/imgs/Boisko PSP3 (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP3 (2)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP3 (2) ",
          Adres: "Traugutta 2",
          Kategoria_Miejsca: "Boisko do piłki ręcznej",
          Dyscyplina: "Piłka ręczna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'22.0%22N+18%C2%B032'14.5%22E/@53.9727901,18.5351773,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972787!4d18.537366"},

      { odleglosc: this.BoiskoPSP3,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58570936_2097807960517081_4011165907303792640_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=5e107381f783465a01dd0d67a330b74a&oe=5D5B0602",
          zdjecie2: "../../assets/imgs/Boisko PSP3 (5)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP3 (5)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP3 (5)",
          Adres: "Traugutta 2",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'22.0%22N+18%C2%B032'14.5%22E/@53.9727901,18.5351773,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972787!4d18.537366"},

      { odleglosc: this.BoiskoPSP4AlejaJanaPawłaII,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59400748_2286217288318003_6571011787754307584_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=5f22416142a75a4f4fcdd04103f4e5bd&oe=5D6EED65",
          zdjecie2: "../../assets/imgs/Boisko PSP4  aleja Jana Pawła II/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP4  aleja Jana Pawła II/3.jpg",

          Nazwa_Miejsca: "Boisko PSP4 aleja Jana Pawła II",
          Adres: "Aleja Jana Pawła II ",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka nożna; Piłka ręczna; Siatkówka",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},

      { odleglosc: this.BoiskoPSP6,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59623610_871823323161433_1583353862767509504_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=799a76bd9ca25ba46f6ff94286a46597&oe=5D5E1961",
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

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60107420_593727607703480_1613628103689502720_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=befcb56be752a3817b0c06eb147e8e45&oe=5D30B255",
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

      { odleglosc: this.BoiskoZSZ,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59909556_444930762743540_6020110102361538560_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=8db16bfa0eab67249f3ecda3636216b7&oe=5D2C8B3B",
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

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59519045_576585839518008_3379895599867363328_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=b9e47dd47294b8d8ccdfd557f1a30f56&oe=5D688E56",
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

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58549574_2165665393528151_3939023251438567424_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=6f315a2d508caffb2e325af64b6e09c0&oe=5D71BF1B",
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

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59914231_443028193113136_7340890559667503104_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=7cfd3fb5ed57cd0fb51b6cb4e9561a8c&oe=5D70541E",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59609231_596722054173850_7209239151936274432_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=2c889eb85830112139f6f33e5005b90e&oe=5D2EF83B",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60272396_430450314398382_8564265337703366656_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=914602ec7bee9c52860b030cb7300002&oe=5D73B6DB",

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

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59243937_883508015334863_102627822631124992_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=697d614a9ba33c6b38ebb23b8f6ad2b4&oe=5D5DE6A3",
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

      { odleglosc: this.BoiskoILO,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/64328633_350759058976743_7237311427550117888_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=e6b02b25359d74806dc782ad562ac60b&oe=5D89597F",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62053825_332770054062851_7322606454391701504_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=c08ac852006e6d758dd23c5af4ea9f51&oe=5D9A4E87",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/61967921_415376065978649_6559416952308105216_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=0248336455be48eb440d76f938ed50b0&oe=5D8294FC",

          Nazwa_Miejsca: "Boisko I LO",
          Adres: "Generała Józefa Hallera 31",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "15:00 - 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B058'15.8%22N+18%C2%B031'52.1%22E/@53.971049,18.53046,200m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971048!4d18.531133?hl=pl"},

      { odleglosc: this.BoiskoPSP1filia,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62073974_380842429443324_3345047983279308800_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=0395ae9118ce30598982ca6a0d8644e7&oe=5D9C5C25",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62261343_892430341098058_7259790161095950336_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=71e344b093b04cbff4e16337e8195f20&oe=5D8BDE0A",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62527691_1254149958075974_3580834991975694336_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=d07d40bc9eacb132ce34dab735199c72&oe=5D52E53A",

          Nazwa_Miejsca: "Boisko PSP1 (filia)",
          Adres: "2 Pułku Szwoleżerów Rokitniańskich 4",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka ręczna, Piłka nożna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://www.pg3.starogard.pl/",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B057'59.3%22N+18%C2%B031'09.1%22E/@53.9664759,18.5185349,196m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d53.9664754!4d18.5191872?hl=pl"},

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
    if(WYNIK == "BoiskoOSIR")
      this.BoiskoOSIR = this.kilometry
    if(WYNIK == "AdresBoiskoNaOsMikołajaKopernika")
      this.AdresBoiskoNaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "BoiskoPSP1")
      this.BoiskoPSP1 = this.kilometry
    if(WYNIK == "BoiskoPSP32")
      this.BoiskoPSP32 = this.kilometry
    if(WYNIK == "BoiskoPSP3")
      this.BoiskoPSP3 = this.kilometry
    if(WYNIK == "BoiskoPSP4AlejaJanaPawłaII")
      this.BoiskoPSP4AlejaJanaPawłaII = this.kilometry
    if(WYNIK == "BoiskoPSP6")
      this.BoiskoPSP6 = this.kilometry
    if(WYNIK == "BoiskoPSP8")
      this.BoiskoPSP8 = this.kilometry
    if(WYNIK == "BoiskoZSZ")
      this.BoiskoZSZ = this.kilometry
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
    if(WYNIK == "BoiskoILO")
      this.BoiskoILO = this.kilometry
    if(WYNIK == "BoiskoPSP1filia")
      this.BoiskoPSP1filia = this.kilometry
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