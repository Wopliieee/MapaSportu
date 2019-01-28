import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OpisPage } from '../../opis/opis';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the BoiskoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@NgModule()
@Component({
  selector: 'page-boisko',
  templateUrl: 'boisko.html',
})
export class BoiskoPage {
  @ViewChild(Slides) slides: Slides;
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

  _imageViewerCtrl: ImageViewerController;
  BoiskoDoKoszykowkiPrzyRestauracji: any;
  NazwaMiejsca: any;
  KategoriaSportu: any;
  KategoriaMiejsca: any;
  Ulica: any;
  KrótkiOpis: any;
  Ocena: any;
  GodzinaOtwarcia: any;
  Koszt: any;
  BoiskoNaOsiedluKonstytucji3Maja: any;
  results: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public geo: Geolocation, imageViewerCtrl: ImageViewerController, private iab: InAppBrowser) {
    
    this._imageViewerCtrl = imageViewerCtrl;
    
    this.lat5 = navParams.get('data');
    this.lon5 = navParams.get('data2');
        
    this.refresh()
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

    this.ObliczKilometry(53.963750, 18.510056, "BoiskoNaOsiedluKonstytucji3Maja")
    this.ObliczKilometry(53.970762, 18.515613, "BoiskoDoKoszykowkiPrzyRestauracji")


    interface Miejsce {
      nazwa: string;
      odleglosc: any;
      zdjecie: string;
      zdjecie2: string;
      zdjecie3: string;

      Nazwa_Miejsca: string,
      Kategoria_Sportu: string,
      Kategoria_Miejsca: string,
      Ulica: string,
      Krotki_Opis: string,
      Ocena: string,
      Godzina_Otwarcia: string,
      Koszt: string,
      
      Nawigacja: string,
    }


    const miejsca: Miejsce[] =[
      { nazwa: 'Boisko do koszykówki przy restauracji',
          odleglosc: this.BoiskoDoKoszykowkiPrzyRestauracji,
          zdjecie: "https://swidnica24.pl/wp-content/uploads/2016/10/koty-2.jpg",
          zdjecie2: "https://i.imged.pl/kotka-mamcia-szuka-domu.jpg",
          zdjecie3: "https://i.imged.pl/kotka-mamcia-szuka-domu.jpg",
          Nazwa_Miejsca: "Boisko do koszykówki przy restauracji.",
          Kategoria_Sportu: "Koszykówka.",
          Kategoria_Miejsca: "Boisko.",
          Ulica: "ul. Księdza Piotra Ściegiennego",
          Krotki_Opis: "Asfaltowa nawierzchnia, miejsce na dworzu, kosze są zrobione z aluminium(?).",
          Ocena: "2,5/5",
          Godzina_Otwarcia: "24/7",
          Koszt: "Darmowe wejście.",
          Nawigacja: "https://goo.gl/maps/4rLtpASJ3512"},

      { nazwa: 'Boisko na osiedlu Konstytucji 3 Maja',
          odleglosc: this.BoiskoNaOsiedluKonstytucji3Maja,
          zdjecie: "https://i.ytimg.com/vi/T3arcT2ntsE/maxresdefault.jpg",
          zdjecie2: "https://pikio.pl/wp-content/uploads/2017/11/pies.jpg",
          zdjecie3: "https://pikio.pl/wp-content/uploads/2017/11/pies.jpg",
          Nazwa_Miejsca: "Boisko na Osiedlu Konstytucji 3 maja.",
          Kategoria_Sportu: "Koszykówka.",
          Kategoria_Miejsca: "Boisko wielofunkcyjne.",
          Ulica: "Osiedle Konstytucji 3 maja.",
          Krotki_Opis: "Boisko zapewnia możliwości rozwoju w wielu dyscyplinach. Nawierzchnia w bardzo dobrym stanie - tartan.",
          Ocena: "4.5/5",
          Godzina_Otwarcia: "6:00-22:00.",
          Koszt: "Darmowe wejście.",
          Nawigacja: "https://tinyurl.com/Boisko-na-Osiedlu-Konstytucji"},

          
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
    if(WYNIK == "BoiskoNaOsiedluKonstytucji3Maja")
      this.BoiskoNaOsiedluKonstytucji3Maja = this.kilometry
    if(WYNIK == "BoiskoDoKoszykowkiPrzyRestauracji")
      this.BoiskoDoKoszykowkiPrzyRestauracji = this.kilometry

  }

  PUSHOPIS(){
    this.navCtrl.push(OpisPage, {Nazwa_Miejsca: this.NazwaMiejsca, Kategoria_Sportu: this.KategoriaSportu,
      Kategoria_Miejsca: this.KategoriaMiejsca, Ulica_Ulica: this.Ulica,
      Krótki_Opis: this.KrótkiOpis, Ocena_Ocena: this.Ocena,
      Godzina_Otwarcia: this.GodzinaOtwarcia, Koszt_Koszt: this.Koszt});
    }

  OPIS(NM, KS, KM, U, KO, O, GO, K){
    this.NazwaMiejsca = NM
    this.KategoriaSportu = KS
    this.KategoriaMiejsca = KM
    this.Ulica = U
    this.KrótkiOpis = KO
    this.Ocena = O
    this.GodzinaOtwarcia = GO
    this.Koszt = K
    this.PUSHOPIS()
  }

  OpenUrl(url){
  const browser = this.iab.create(url);
  browser.show()
  }

}


