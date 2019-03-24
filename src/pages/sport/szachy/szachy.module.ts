import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SzachyPage } from './szachy';

@NgModule({
  declarations: [
    SzachyPage,
  ],
  imports: [
    IonicPageModule.forChild(SzachyPage),
  ],
})
export class SzachyPageModule {}
