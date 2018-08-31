import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TscorpPage } from './tscorp';

@NgModule({
  declarations: [
    TscorpPage,
  ],
  imports: [
    IonicPageModule.forChild(TscorpPage),
  ],
})
export class TscorpPageModule {}
