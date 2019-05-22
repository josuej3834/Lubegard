import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ProductDetailPage',
  segment: 'product-detail/:param'
})
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  id;
  item: any;
  info: any;
  isDesc = true;
  show1 = false;
  show2 = false;
  show3 = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    this.id = this.navParams.get('param');
    this.loadData();
  }

  loadData(spinner = true) {
    if (spinner)
      this.serviceProvider.showLoading();
    this.serviceProvider.getProduct(this.id).subscribe((data: any) => {
      this.serviceProvider.hideLoading();
      this.item = data;
    }, err => {
      this.serviceProvider.hideLoading();
      console.log(err);
    })
    this.serviceProvider.getProductInfo(this.id).subscribe((data: any) => {
      this.info = data;
    }, err => {
      console.log(err);
    })
  }

}
