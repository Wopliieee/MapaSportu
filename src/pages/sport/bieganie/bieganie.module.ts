import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BieganiePage } from './bieganie';

@NgModule({
  declarations: [
    BieganiePage,
  ],
  imports: [
    IonicPageModule.forChild(BieganiePage),
  ],
})
export class BieganiePageModule {}
