import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkateparkPage } from './skatepark';

@NgModule({
  declarations: [
    SkateparkPage,
  ],
  imports: [
    IonicPageModule.forChild(SkateparkPage),
  ],
})
export class SkateparkPageModule {}
