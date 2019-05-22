import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the LiteraturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-literature',
  templateUrl: 'literature.html',
})
export class LiteraturePage {
  public downloads = [];
  public sellSheets = [];
  public sds = [];
  show1 = true;
  show2 = true;
  show3 = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController,
    public serviceProvider: ServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiteraturePage');
    this.loadData();
  }

  loadData(spinner = true) {
    this.getDownloads(spinner);
    this.getSellSheets();
    this.getSds();
  }

  getDownloads(spinner = true) {
    if (spinner)
      this.serviceProvider.showLoading();
    this.serviceProvider.getDownloads().subscribe((data: any) => {
      this.serviceProvider.hideLoading();
      this.downloads = data;
    }, err => {
      this.serviceProvider.hideLoading();
      console.log(err);
    })
  }
  getSellSheets() {
    this.serviceProvider.getSellSheets().subscribe((data: any) => {
      this.sellSheets = data;
    }, err => {
      console.log(err);
    })
  }
  getSds() {
    this.serviceProvider.getSds().subscribe((data: any) => {
      this.sds = data;
    }, err => {
      console.log(err);
    })
  }

  doShow1() {
    this.show1 = !this.show1;
  }
  doShow2() {
    this.show2 = !this.show2;
  }
  doShow3() {
    this.show3 = !this.show3;
  }

  doRefresh(ev) {
    this.loadData(false);
    setTimeout(() => {
      ev.complete();
    }, 1000);
  }

  menuToggle() {
    this.menuCtrl.toggle();
  }

}
