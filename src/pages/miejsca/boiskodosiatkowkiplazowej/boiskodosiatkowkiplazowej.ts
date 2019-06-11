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
  selector: 'page-boiskodosiatkowkiplazowej',
  templateUrl: 'boiskodosiatkowkiplazowej.html',
})
export class BoiskodosiatkowkiplazowejPage {
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
  BoiskoNaOs60Lecia: any;
  BoiskoNaOs60Lecia2: any;
  BoiskoNaOsMikołajaKopernika: any;
  BoiskoNaOsSzumana: any;
  BoiskoPSP3CzynneSezonowo: any;
  BoiskoPSP4AlejaJanaPawłaII: any;
  BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku: any;
  BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta: any;
  BoiskoNaOsMikołajaKopernika2: any;


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

    this.ObliczKilometry(53.963644, 18.523914, "BoiskoNaOs60Lecia")
    this.ObliczKilometry(53.961969, 18.522381, "BoiskoNaOs60Lecia2")
    this.ObliczKilometry(53.958625, 18.527488, "BoiskoNaOsMikołajaKopernika")
    this.ObliczKilometry(53.961508, 18.535647, "BoiskoNaOsSzumana")
    this.ObliczKilometry(53.972400, 18.536630, "BoiskoPSP3CzynneSezonowo")
    this.ObliczKilometry(53.962934, 18.528891, "BoiskoPSP4AlejaJanaPawłaII")
    this.ObliczKilometry(53.962619, 18.492930, "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.ObliczKilometry(53.977827, 18.537753, "BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta")
    this.ObliczKilometry(53.961573, 18.527074, "BoiskoNaOsMikołajaKopernika2")

    const miejsca: Miejsce[] =[
      { odleglosc: this.BoiskoNaOs60Lecia,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59320246_375849029937188_1674812537046040576_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=8d8dc3e2997a230c96d50c39e326f01b&oe=5D2CF10F",
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
        
      { odleglosc: this.BoiskoNaOs60Lecia2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58381675_402424277155767_1502330597513625600_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=94650dbabe19f598c7703e152c4546e8&oe=5D702B75",
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
        
      { odleglosc: this.BoiskoNaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59561659_408025279750418_1294341523395051520_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=cabf6a5279c806892723f0a5ae70bb87&oe=5D6F9A52",
          zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (4)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (4)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika (4)",
          Adres: "Os. Mikołaja Kopernika 27",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'31.1%22N+18%C2%B031'39.0%22E/@53.9586281,18.5252993,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958625!4d18.527488"},
        
        
        { odleglosc: this.BoiskoNaOsMikołajaKopernika2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59350553_990805734448059_186051051185504256_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=4220650400d5a356d3811038fa1873c6&oe=5D6230C0",
          zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (5)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (5)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika (5)",
          Adres: "Os. Mikołaja Kopernika 10",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.7%22N+18%C2%B031'37.5%22E/@53.9615761,18.5248853,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961573!4d18.527074"},

        
          { odleglosc: this.BoiskoNaOsSzumana,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58772267_290341225180291_3837949897730949120_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=799da1cc98d863d1803bbd70d7f762a3&oe=5D753780",
          zdjecie2: "../../assets/imgs/Boisko na Os. Szumana (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Szumana (3)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Szumana (3)",
          Adres: "Os. Księdza Henryka Szumana 13",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.4%22N+18%C2%B032'08.3%22E/@53.9615111,18.5334583,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961508!4d18.535647"},
        
        { odleglosc: this.BoiskoPSP3CzynneSezonowo,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59863030_2339519576289528_3675213548230803456_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=4f2fcf9e432e038f50a1f23873f2b7ed&oe=5D6EC63A",
          zdjecie2: "../../assets/imgs/Boisko PSP3 (4)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP3 (4)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP3 (4)",
          Adres: "Traugutta 2",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'20.6%22N+18%C2%B032'11.9%22E/@53.9724031,18.5344413,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.9724!4d18.53663"},
        
        { odleglosc: this.BoiskoPSP4AlejaJanaPawłaII,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59828688_442800163153432_4522428815535767552_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=00f528465af5eedf31fcc194bfe9e3d5&oe=5D2B03F9",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59914911_285445202358686_3404753719525376000_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=abfcc2c3fc8c36176c1b1b2ff2705b3d&oe=5D6905AB",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58442616_2091979177772882_5237304419485220864_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=13b4152bfa5d238f831c2e247b7ddc4a&oe=5D713F33",
          // zdjecie: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II (3)/1.jpg",
          // zdjecie2: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II (3)/2.jpg",
          // zdjecie3: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II (3)/3.jpg",

          Nazwa_Miejsca: "Boisko PSP4  aleja Jana Pawła II",
          Adres: "Aleja Jana Pawła II 4",
          Kategoria_Miejsca: "Boisko do siatkówki plażowej",
          Dyscyplina: "Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
        
        { odleglosc: this.BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59689091_2349462745267236_3779104104131854336_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=2f8d2aff0adc1101fc6552bcbead728c&oe=5D5EE40E",
          zdjecie2: "../../assets/imgs/Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku (3)/3.jpg",

          Nazwa_Miejsca: "Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku (3)",
          Adres: "Nierzwickiego 18",
          Kategoria_Miejsca: "Boisko do siatkówki plażowej",
          Dyscyplina: "Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "7:00 – 21:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.8%22N+18%C2%B029'34.9%22E/@53.9627241,18.4908433,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962721!4d18.493032"},

        { odleglosc: this.BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58381991_381534772454669_4728207239922319360_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=5c2389215a2d8e80b5b1cf389c423a10&oe=5D6AB81A",
          zdjecie2: "../../assets/imgs/Boisko do siatkówki plażowej przy ul. Traugutta/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko do siatkówki plażowej przy ul. Traugutta/3.jpg",

          Nazwa_Miejsca: "Boisko do siatkówki plażowej przy ul. Traugutta",
          Adres: "ul. Romualda Traugutta 38",
          Kategoria_Miejsca: "Boisko do siatkówki plażowej",
          Dyscyplina: "Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "06:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'40.2%22N+18%C2%B032'15.9%22E/@53.9778286,18.5366265,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977827!4d18.537753"},
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

    if(WYNIK == "BoiskoNaOs60Lecia")
      this.BoiskoNaOs60Lecia = this.kilometry
    if(WYNIK == "BoiskoNaOs60Lecia2")
      this.BoiskoNaOs60Lecia2 = this.kilometry
    if(WYNIK == "BoiskoNaOsMikołajaKopernika")
      this.BoiskoNaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "BoiskoNaOsSzumana")
      this.BoiskoNaOsSzumana = this.kilometry
    if(WYNIK == "BoiskoPSP3CzynneSezonowo")
      this.BoiskoPSP3CzynneSezonowo = this.kilometry
    if(WYNIK == "BoiskoPSP4AlejaJanaPawłaII")
      this.BoiskoPSP4AlejaJanaPawłaII = this.kilometry
    if(WYNIK == "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
      this.BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku = this.kilometry
    if(WYNIK == "BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta")
      this.BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta = this.kilometry
    if(WYNIK == "BoiskoNaOsMikołajaKopernika2")
      this.BoiskoNaOsMikołajaKopernika2 = this.kilometry

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
