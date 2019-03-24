import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KreglePage } from './kregle';

@NgModule({
  declarations: [
    KreglePage,
  ],
  imports: [
    IonicPageModule.forChild(KreglePage),
  ],
})
export class KreglePageModule {}
