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
  selector: 'page-siatkowka',
  templateUrl: 'siatkowka.html',
})
export class SiatkowkaPage {
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
  BoiskoNaOsKonstytucji3GoMaja: any;
  BoiskoORLIKŻabno: any;
  BoiskoPSP4AlejaJanaPawłaII: any;
  BoiskoPSP8: any;
  MiejskaHalaSportowaImAndrzejaGrubbyOSiR: any;
  SalaGimnastycznaILiceumOgólnokształcące: any;
  SalaGimnastycznaIILiceumOgólnokształcące: any;
  SalaGimnastycznaMOS: any;
  SalaGimnastycznaPSP1: any;
  SalaGimnastycznaPSP3: any;
  SalaGimnastycznaPSP32: any;
  SalaGimnastycznaPSP4: any;
  SalaGimnastycznaPSP8: any;
  SalaGimnastycznaZSE: any;
  PlaczabawFikumiku: any;
  BoiskoPSP1filiaSiatkówka: any;
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
    this.ObliczKilometry(53.963770, 18.509677, "BoiskoNaOsKonstytucji3GoMaja")
    this.ObliczKilometry(53.982639, 18.492626, "BoiskoORLIKŻabno")
    this.ObliczKilometry(53.962934, 18.528891, "BoiskoPSP4AlejaJanaPawłaII")
    this.ObliczKilometry(53.957562, 18.527770, "BoiskoPSP8")
    this.ObliczKilometry(53.970017, 18.535273, "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.ObliczKilometry(53.971029, 18.531611, "SalaGimnastycznaILiceumOgólnokształcące")
    this.ObliczKilometry(53.964967, 18.547153, "SalaGimnastycznaIILiceumOgólnokształcące")
    this.ObliczKilometry(53.971403, 18.531161, "SalaGimnastycznaMOS")
    this.ObliczKilometry(53.961259, 18.501102, "SalaGimnastycznaPSP1")
    this.ObliczKilometry(53.975370, 18.530597, "SalaGimnastycznaPSP3")
    this.ObliczKilometry(53.972769, 18.536707, "SalaGimnastycznaPSP32")
    this.ObliczKilometry(53.962934, 18.528891, "SalaGimnastycznaPSP4")
    this.ObliczKilometry(53.957562, 18.527770, "SalaGimnastycznaPSP8")
    this.ObliczKilometry(53.966320, 18.535633, "SalaGimnastycznaZSE")
    this.ObliczKilometry(53.973069, 18.542568, "PlaczabawFikumiku")
    this.ObliczKilometry(53.966272, 18.519094, "BoiskoPSP1filiaSiatkówka")
    this.ObliczKilometry(53.966306, 18.519750, "SalagimnastycznaPSP1filia")

    const miejsca: Miejsce[] =[
      { odleglosc: this.BoiskoOSIR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59410583_355557525073206_7708766246715523072_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=a4a1d0cc93d817ffce20ad5566c0e014&oe=5D6F0D37",
          zdjecie2: "../../assets/imgs/Boisko (OSiR) (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko (OSiR) (3)/3.jpg",

          Nazwa_Miejsca: "Boisko (OSiR) (3)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Akryl",
          Godziny_Otwarcia: `7:00 – 22:00`,
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"
        },

      { odleglosc: this.BoiskoNaOsKonstytucji3GoMaja,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58722640_1223298177825283_9016269319432044544_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=59b21d4271233578593a1f1773e9a72b&oe=5D757877",
          zdjecie2: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Konstytucji 3-go Maja",
          Adres: "Os. Konstytucji 3-go Maja 22",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.6%22N+18%C2%B030'34.8%22E/@53.9637731,18.5074883,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96377!4d18.509677"},
      
      { odleglosc: this.BoiskoORLIKŻabno,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58800327_352375305628755_2750603030381461504_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=cc2490ee279d386b64074a26903a00a3&oe=5D72D0D3",
          zdjecie2: "../../assets/imgs/Boisko ORLIK Żabno/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko ORLIK Żabno/3.jpg",

          Nazwa_Miejsca: "Boisko ORLIK Żabno",
          Adres: "Ks. Franciszka Kalinowskiego 28",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Siatkówka",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: `Marzec – Kwiecień \n \n Pon. - Pt.: 17:00 – 20:00 \n Sob. -Ndz.: 14:00 – 21:30 \n \n Maj – Październik \n \n Pon. - Pt.: 17:0 – 21:30 \n Sob. -Ndz.: 14:00 – 21:30 \n \n Listopad – Luty \n \n Zamknięte`,
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.5%22N+18%C2%B029'33.5%22E/@53.9826421,18.4904373,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982639!4d18.492626"},
        
        { odleglosc: this.BoiskoPSP4AlejaJanaPawłaII,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58667578_2173537046064752_1956257702388695040_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=2bfe02ef32a104f8681fdb13a1291386&oe=5D7651F7",
          zdjecie2: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II (2)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP4 aleja Jana Pawła II",
          Adres: "Aleja Jana Pawła II 4 ",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka nożna; Piłka ręczna; Siatkówka",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
        
        { odleglosc: this.BoiskoPSP8,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59929299_2169793003110200_8942843842734850048_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=9d521ae23596e79afa32d6763f829396&oe=5D2F5452",
          zdjecie2: "../../assets/imgs/Boisko PSP8 (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP8 (3)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP8 (3)",
          Adres: "Aleja Jana Pawła II 10",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Siatkówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "16:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://psp8.edu.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},
        
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
        
        { odleglosc: this.SalaGimnastycznaILiceumOgólnokształcące,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
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
        
        { odleglosc: this.SalaGimnastycznaMOS,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285488_316953192310280_5264287233694760960_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=f5a2250dacd893040e022e441790e832&oe=5D656E95",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna MOS/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna MOS/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna MOS",
          Adres: "Józefa Hallera 36",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka; Boks",
          Nawierzchnia: "Akryl",
          Godziny_Otwarcia: "15:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://mosstarogard.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'17.1%22N+18%C2%B031'52.2%22E/@53.9714061,18.5289723,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971403!4d18.531161"},
        
        { odleglosc: this.SalaGimnastycznaPSP1,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59243937_883508015334863_102627822631124992_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=697d614a9ba33c6b38ebb23b8f6ad2b4&oe=5D5DE6A3",
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
        
        { odleglosc: this.SalaGimnastycznaPSP3,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59849515_1101237386743169_964543822392459264_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=18fa2ac21b3f6f3afa4774e36400ba96&oe=5D6EB17F",
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
        
        { odleglosc: this.SalaGimnastycznaPSP32,

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
        
          { odleglosc: this.PlaczabawFikumiku,

            zdjecie: '../../assets/imgs/Plac zabaw Fiku-miku/1.jpg',
            zdjecie2: '../../assets/imgs/Plac zabaw Fiku-miku/2.jpg',
            zdjecie3: '../../assets/imgs/Plac zabaw Fiku-miku/3.jpg',
  
            Nazwa_Miejsca: 'Boisko na placu zabaw "Fiku-miku" przy ul. Jana Buchholtza 6',
            Adres: "ul. Jana Buchholtza 6",
            Kategoria_Miejsca: "Boisko wielofunkcyjne",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Tartan",
            Godziny_Otwarcia: "6:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "-",
            Nawigacja: "https://www.google.pl/maps/place/Jana+Buchholza+6,+83-250+Starogard+Gdański/@53.9732109,18.5425676,17z/data=!4m5!3m4!1s0x47029c9a9b3ef00b:0x767aa42251651a23!8m2!3d53.9729004!4d18.5426218"},
            
        { odleglosc: this.BoiskoPSP1filiaSiatkówka,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62001804_372136643415972_6204333700797169664_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=2f4c484f2f55128aa2df34eacb9882d9&oe=5D8BABCF",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62644171_864036873961351_6091699222841655296_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=3b34c8d2b2fd187ed7915540e31d832f&oe=5D8E6E1C",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62055843_481088952434490_8961743489838612480_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=f866b31495102c5223cf72c6cfd2ea28&oe=5D55E279",

          Nazwa_Miejsca: "Boisko PSP1 (filia)",
          Adres: "2 Pułku Szwoleżerów Rokitniańskich 4",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Siatkówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://www.pg3.starogard.pl/",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B057'58.6%22N+18%C2%B031'08.7%22E/@53.9662731,18.5182975,239m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.966272!4d18.519094?hl=pl"},


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
    if(WYNIK == "BoiskoNaOsKonstytucji3GoMaja")
      this.BoiskoNaOsKonstytucji3GoMaja = this.kilometry
    if(WYNIK == "BoiskoORLIKŻabno")
      this.BoiskoORLIKŻabno = this.kilometry
    if(WYNIK == "BoiskoPSP4AlejaJanaPawłaII")
      this.BoiskoPSP4AlejaJanaPawłaII = this.kilometry
    if(WYNIK == "BoiskoPSP8")
      this.BoiskoPSP8 = this.kilometry
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
    if(WYNIK == "SalaGimnastycznaPSP3")
      this.SalaGimnastycznaPSP3 = this.kilometry
    if(WYNIK == "SalaGimnastycznaPSP32")
      this.SalaGimnastycznaPSP32 = this.kilometry
    if(WYNIK == "SalaGimnastycznaPSP4")
      this.SalaGimnastycznaPSP4 = this.kilometry
    if(WYNIK == "SalaGimnastycznaPSP8")
      this.SalaGimnastycznaPSP8 = this.kilometry
    if(WYNIK == "SalaGimnastycznaZSE")
      this.SalaGimnastycznaZSE = this.kilometry
    if(WYNIK == "PlaczabawFikumiku")
      this.PlaczabawFikumiku = this.kilometry
    if(WYNIK == "BoiskoPSP1filiaSiatkówka")
      this.BoiskoPSP1filiaSiatkówka = this.kilometry
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