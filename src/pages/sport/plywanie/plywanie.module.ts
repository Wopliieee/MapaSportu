import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlywaniePage } from './plywanie';

@NgModule({
  declarations: [
    PlywaniePage,
  ],
  imports: [
    IonicPageModule.forChild(PlywaniePage),
  ],
})
export class PlywaniePageModule {}
