import { ZnajdzWMojejOkolicyPage } from './../about/znajdz-w-mojej-okolicy/znajdz-w-mojej-okolicy';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KoszykowkaPage } from '../koszykowka/koszykowka'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  constructor(public navCtrl: NavController) {
    
  }

  ZnajdzWMojejOkolicy(){
    this.navCtrl.push(ZnajdzWMojejOkolicyPage);
  }

  koszykowkaNAV(){
    this.navCtrl.push(KoszykowkaPage);
  }

}
