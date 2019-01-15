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
  KategoriaSportu: any;
  KategoriaMiejsca: any;
  Ulica: any;
  GodzinaOtwarcia: any;
  Koszt: any;
  KrotkiOpis: any;
  Ocena: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.NazwaMiejsca = navParams.get('Nazwa_Miejsca');
    this.KategoriaSportu = navParams.get('Kategoria_Sportu');

    this.KategoriaMiejsca = navParams.get('Kategoria_Miejsca');
    this.Ulica = navParams.get('Ulica_Ulica');

    this.KrotkiOpis = navParams.get('Krótki_Opis');
    this.Ocena = navParams.get('Ocena_Ocena');

    this.GodzinaOtwarcia = navParams.get('Godzina_Otwarcia');
    this.Koszt = navParams.get('Koszt_Koszt');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpisPage');
  }

}
