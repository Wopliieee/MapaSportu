import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KoszykowkaPage } from './koszykowka';

@NgModule({
  declarations: [
    KoszykowkaPage,
  ],
  imports: [
    IonicPageModule.forChild(KoszykowkaPage),
  ],
})
export class KoszykowkaPageModule {}
