import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportywalkiPage } from './sportywalki';

@NgModule({
  declarations: [
    SportywalkiPage,
  ],
  imports: [
    IonicPageModule.forChild(SportywalkiPage),
  ],
})
export class SportywalkiPageModule {}
