import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiejscaPage } from './miejsca';

@NgModule({
  declarations: [
    MiejscaPage,
  ],
  imports: [
    IonicPageModule.forChild(MiejscaPage),
  ],
})
export class MiejscaPageModule {}
