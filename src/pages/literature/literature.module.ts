import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiteraturePage } from './literature';

@NgModule({
  declarations: [
    LiteraturePage,
  ],
  imports: [
    IonicPageModule.forChild(LiteraturePage),
  ],
})
export class LiteraturePageModule {}
