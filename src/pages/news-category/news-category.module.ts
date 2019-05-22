import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsCategoryPage } from './news-category';

@NgModule({
  declarations: [
    NewsCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsCategoryPage),
  ],
})
export class NewsCategoryPageModule {}
