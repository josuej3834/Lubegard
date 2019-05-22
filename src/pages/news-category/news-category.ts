import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the NewsCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'NewsCategoryPage',
  segment: 'news-category/:param'
})
@Component({
  selector: 'page-news-category',
  templateUrl: 'news-category.html',
})
export class NewsCategoryPage {
  list = [];
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsCategoryPage');
    this.id = this.navParams.get('param');
    console.log(this.id);
    this.loadData();
  }

  loadData(spinner = true) {
    if (spinner)
      this.serviceProvider.showLoading();
    this.serviceProvider.getCategory(this.id).subscribe((data: any) => {
      this.serviceProvider.hideLoading();
      this.list = data;
    }, err => {
      this.serviceProvider.hideLoading();
      console.log(err);
    })
  }

  detail(item) {
    this.serviceProvider.setData('newsDetail', item);
    this.navCtrl.push("NewsDetailPage");
  }
}
