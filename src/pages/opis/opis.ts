import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ZgloszeniePage } from '../zgloszenie/zgloszenie';


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
  zdj2: any;
  zdj: any;
  zdj3: any;
  nawigacja: any;
  przedrostek: string;
  przedrostekN: string;
  brakinfo: any;
  report: any;
  StronaInternetowa2: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    // this.przedrostek = "Strona internetowa";

    this.NazwaMiejsca = navParams.get('Nazwa_Miejsca');
    this.NazwaMiejsca = this.NazwaMiejsca + "\n";

    this.Dyscyplina = navParams.get('Dyscyplina');
    this.Dyscyplina = this.Dyscyplina + "\n";

    this.KategoriaMiejsca = navParams.get('Kategoria_Miejsca');
    this.KategoriaMiejsca = this.KategoriaMiejsca + "\n";

    this.Adres = navParams.get('Adres_Adres');
    this.Adres = this.Adres + "\n";

    this.Nawierzchnia = navParams.get('Nawierzchnia');
    this.Nawierzchnia = this.Nawierzchnia + "\n";

    this.GodzinyOtwarcia = navParams.get('Godziny_Otwarcia');
    this.GodzinyOtwarcia = this.GodzinyOtwarcia + "\n";

    this.Koszt = navParams.get('Koszt_Koszt');
    this.Koszt = this.Koszt + "\n";

    this.StronaInternetowa = navParams.get("Strona_Internetowa");

    if(this.Nawierzchnia != "-"+ "\n")
      this.przedrostekN = "Nawierzchnia \n";
    if(this.Nawierzchnia == "-"+ "\n")
      this.Nawierzchnia = "Brak informacji";

    
    if(this.StronaInternetowa != "-")
      this.przedrostek = "Strona internetowa";
    if(this.StronaInternetowa == "-")
      this.StronaInternetowa = "";
    if(this.StronaInternetowa == "-")
      this.przedrostek = "";

    if(this.StronaInternetowa == "https://basenpsp1.wordpress.com/about/cennik/")
      this.StronaInternetowa2 = "https://www.facebook.com/Szko%C5%82a-P%C5%82ywania-RYBKA-145263645558646/";
    else if(this.StronaInternetowa == "http://ren.com.pl/basen-spa/")
      this.StronaInternetowa2 = "https://www.facebook.com/Szko%C5%82a-P%C5%82ywania-RYBKA-145263645558646/";
    else if(this.StronaInternetowa != "https://basenpsp1.wordpress.com/about/cennik/")
      this.StronaInternetowa2 = "";
    else if(this.StronaInternetowa != "http://ren.com.pl/basen-spa/")
      this.StronaInternetowa2 = "";
      
      // this.przedrostek = ""

    this.zdj = navParams.get('zdjecie');
    this.zdj2 = navParams.get("zdjecie2");
    this.zdj3 = navParams.get("zdjecie3");

    this.nawigacja = navParams.get("Nawigacja");

  }


  ionViewWillEnter() {
    console.log("wszedłeś")
  }

  ionViewWillLeave() {
    console.log('wyszedłeś');
  }

  zgloszenie(){
    this.report = this.NazwaMiejsca + "    ;    " + this.Dyscyplina + "    ;    " + this.KategoriaMiejsca
    this.navCtrl.push(ZgloszeniePage, {data: this.report});
  }



  OpenUrl(url){
    // const browser = this.iab.create(url);
    // browser.show()
    window.open(url, "_system", "location=yes");

    }

}
