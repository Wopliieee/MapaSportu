import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZgloszeniePage } from './zgloszenie';

@NgModule({
  declarations: [
    ZgloszeniePage,
  ],
  imports: [
    IonicPageModule.forChild(ZgloszeniePage),
  ],
})
export class ZgloszeniePageModule {}
