import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OpisPage } from '../../opis/opis';

/**
 * Generated class for the PilkarecznaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pilkareczna',
  templateUrl: 'pilkareczna.html',
})
export class PilkarecznaPage {
  @ViewChild(Slides) slides: Slides;
  kilometry: any;
  x1: any;
  y1: any;
  x2: any;
  y2: any;
  radian: any;
  odległość: any;
  lat: string;
  lon: string;

  location: any;
  message: any;
  wathID: any;
  latREFRESH: any;
  lonREFRESH: any;
  latREFRESHED: any;
  lonREFRESHED: any;

  lat1: number;
  lon1: number;
  lat2: number;
  lon2: number;
  lon5: any;
  lat5: any;
  x: any;
  WYNIK: any;
  marian: any;

  _imageViewerCtrl: ImageViewerController;
  currentIndex: any;
  link: string;
  stefan: any;
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public geo: Geolocation, imageViewerCtrl: ImageViewerController) {
    
    this._imageViewerCtrl = imageViewerCtrl;
    
    this.lat5 = navParams.get('data');
    this.lon5 = navParams.get('data2');
    
    this.refresh()
  }


  refresh(){
    this.ObliczKilometry(53.963750, 18.510056, "BoiskoNaOsiedluKonstytucji3Maja")
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
    this.kilometry = Math.round(this.odległość*100)/100+"km";
    if(WYNIK == "BoiskoNaOsiedluKonstytucji3Maja")
      this.BoiskoNaOsiedluKonstytucji3Maja = this.kilometry

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
    // if(SPORT == "BoiskoDoKoszykowkiPrzyRestauracji")
    //   this.NazwaMiejsca = "Boisko do koszykówki przy restauracji.";
    //   this.navCtrl.push(OpisPage, {data: this.NazwaMiejsca});
  }

}
