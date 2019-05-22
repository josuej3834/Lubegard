import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsEventsPage } from './news-events';

@NgModule({
  declarations: [
    NewsEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsEventsPage),
  ],
})
export class NewsEventsPageModule {}
