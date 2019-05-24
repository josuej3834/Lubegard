import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import * as $ from 'jquery';
/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  url = '';
  title = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    this.title = this.navParams.get('title');
    this.url = this.navParams.get('url');
    $('#iframe').attr('src', this.url + '');
    let tt = this;
    this.serviceProvider.showLoading();
    $("#iframe").on("load", function () {
      tt.serviceProvider.hideLoading();
    }, err => {
      tt.serviceProvider.hideLoading();
    })
  }

}
