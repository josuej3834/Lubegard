import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the NewsEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-events',
  templateUrl: 'news-events.html',
})
export class NewsEventsPage {
  list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController,
    public serviceProvider: ServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsEventsPage');
    this.loadData();
  }

  loadData(spinner = true) {
    if (spinner)
      this.serviceProvider.showLoading();
    this.serviceProvider.getCategories().subscribe((data: any) => {
      this.serviceProvider.hideLoading();
      this.list = data;
    }, err => {
      this.serviceProvider.hideLoading();
      console.log(err);
    })
  }

  menuToggle() {
    this.menuCtrl.toggle();
  }

  goCategory(item) {
    this.navCtrl.push("NewsCategoryPage", { param: item.category.term_id });
  }
}
