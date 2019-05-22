import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the FindProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-product',
  templateUrl: 'find-product.html',
})
export class FindProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindProductPage');
  }

  openFinder() {
    window.open('https://lubegard.opticatonline.com/', '_blank');
  }

}
