import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opis',
  templateUrl: 'opis.html',
})
export class OpisPage {
  NazwaMiejsca: any;
  Dyscyplina: any;
  KategoriaMiejsca: any;
  Adres: any;
  GodzinyOtwarcia: any;
  Koszt: any;
  Nawierzchnia: any;
  StronaInternetowa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.NazwaMiejsca = navParams.get('Nazwa_Miejsca');
    this.Dyscyplina = navParams.get('Dyscyplina');

    this.KategoriaMiejsca = navParams.get('Kategoria_Miejsca');
    this.Adres = navParams.get('Adres_Adres');

    this.Nawierzchnia = navParams.get('Nawierzchnia');
    this.GodzinyOtwarcia = navParams.get('Godziny_Otwarcia');

    this.Koszt = navParams.get('Koszt_Koszt');
    this.StronaInternetowa = navParams.get("Strona_Internetowa")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpisPage');
  }

}
