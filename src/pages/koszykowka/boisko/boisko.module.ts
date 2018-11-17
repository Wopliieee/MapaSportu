import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoiskoPage } from './boisko';

@NgModule({
  declarations: [
    BoiskoPage,
  ],
  imports: [
    IonicPageModule.forChild(BoiskoPage),
  ],
})
export class BoiskoPageModule {}
