import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiezniaPage } from './bieznia';

@NgModule({
  declarations: [
    BiezniaPage,
  ],
  imports: [
    IonicPageModule.forChild(BiezniaPage),
  ],
})
export class BiezniaPageModule {}
