import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  id;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServiceProvider,
    public zone: NgZone
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
    this.loadData();
  }

  loadData(spinner = true) {
    this.zone.run(() => {
      this.item = this.serviceProvider.getData('newsDetail');
    })
  }

}
