import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrossfitPage } from './crossfit';

@NgModule({
  declarations: [
    CrossfitPage,
  ],
  imports: [
    IonicPageModule.forChild(CrossfitPage),
  ],
})
export class CrossfitPageModule {}
