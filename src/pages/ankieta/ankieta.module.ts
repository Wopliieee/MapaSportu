import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnkietaPage } from './ankieta';

@NgModule({
  declarations: [
    AnkietaPage,
  ],
  imports: [
    IonicPageModule.forChild(AnkietaPage),
  ],
})
export class AnkietaPageModule {}
