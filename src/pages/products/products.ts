import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController,
    public serviceProvider: ServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.loadData();
  }

  menuToggle() {
    this.menuCtrl.toggle();
  }

  loadData(spinner = true) {
    if (spinner)
      this.serviceProvider.showLoading();
    this.serviceProvider.getProducts().subscribe((data: any) => {
      this.serviceProvider.hideLoading();
      this.list = data;
    }, err => {
      this.serviceProvider.hideLoading();
      console.log(err);
    })
  }

  doRefresh(ev) {
    this.loadData(false);
    setTimeout(() => {
      ev.complete();
    }, 1000);
  }

  detail(item) {
    this.navCtrl.push("ProductDetailPage", { param: item.id });
  }
}
