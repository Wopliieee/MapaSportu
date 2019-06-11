import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the IntroPage pagee.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  // tab1Root = HomePage;
  rootPage:any = TabsPage;
  cookie2: number;

  constructor(public storage: Storage, private alertController:AlertController, public navCtrl: NavController, public navParams: NavParams) {
    // this.storage.set('tutorial', 'true');
    this.cookie2=0;
    this.storage.set('cookie2', 10);
    this.storage.set('cookie', 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
    // this.storage.set('tutorial', 'true');
  }

  goToHome(){
    // this.navCtrl.push(HomePage);
    // this.navCtrl.popToRoot(rootPage);
    // this.navCtrl.setRoot(TabsPage);
    this.storage.set('tutorial', 'false');
    this.storage.set('test', "false");
    // this.navCtrl.popToRoot();
    this.navCtrl.popToRoot();
    this.storage.set('cookie', 10);

    // this.storage.get('cookie2').then((val) => {
    //   console.log('Count of the cookie2: ', val);
    //   this.cookie2=val;
    //   if(this.cookie2 == 100)
    //     this.navCtrl.popToRoot();
    //     this.storage.set('cookie2', 1000);
    //     this.storage.set('cookie', 10);
    // });
    

    // let regulamin = this.alertController.create({
    //   title:"Regulamin",
    //   message:"Kliknij w regulamin poniżej by go wyświetlić",
    //   cssClass: 'alertDanger',
    //   buttons:[
    //     {
    //       text: 'Zapoznałem się i akceptuję',
    //       cssClass: 'zapoznaniesie',
    //       handler: () => {
    //         console.log("Zapoznałem się i akceptuję")

    //       }
    //     },
    //     {
    //       text: `Regulamin`,
    //       cssClass: 'regulamin',
    //       handler: () => {
    //         window.open("https://drive.google.com/file/d/1szZ7OnxOetUKKRqANpEUVNqQdBMn3z7T/view", "_system", "location=yes")
            

    //       }
    //     }
    //   ]
    // });
    // regulamin.present()
  }

  regulamin(){
    this.storage.set('cookie2', 100);
    window.open("https://drive.google.com/file/d/1szZ7OnxOetUKKRqANpEUVNqQdBMn3z7T/view", "_system", "location=yes");
  }

}