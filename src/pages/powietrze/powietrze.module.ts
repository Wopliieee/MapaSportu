import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PowietrzePage } from './powietrze';

@NgModule({
  declarations: [
    PowietrzePage,
  ],
  imports: [
    IonicPageModule.forChild(PowietrzePage),
  ],
})
export class PowietrzePageModule {}
