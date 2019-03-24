import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LodowiskoPage } from './lodowisko';

@NgModule({
  declarations: [
    LodowiskoPage,
  ],
  imports: [
    IonicPageModule.forChild(LodowiskoPage),
  ],
})
export class LodowiskoPageModule {}
