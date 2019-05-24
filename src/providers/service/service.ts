import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { LoadingController, ToastController, App } from 'ionic-angular';

@Injectable()

export class ServiceProvider {
  public apiUrl = "https://www.lubegard.com/api/";
  loading: any;
  public loginData: any;

  constructor(public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public app: App
  ) {
    // this.apiUrl = '/api/';
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  getFormData(item) {
    var form_data = new FormData();
    for (var key in item) {
      form_data.append(key, item[key]);
    }
    return form_data;
  }
  public checkLoading() {
    let maxLoadingTime = 10000;
    if (this.loading) {
      setTimeout(() => {
        this.hideLoading();
      }, maxLoadingTime)
    }
  }

  public showLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: ''
    });
    this.loading.present();
    this.checkLoading();
  }

  public hideLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }
  public getHeaders() {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Accept', '/');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  public getDownloads() {
    let headers = this.getHeaders();
    // item = this.getFormData(item);
    // item = JSON.stringify(item);
    let url = this.apiUrl + 'wp/v2/downloads?per_page=100';
    return this.http.get(url, { headers: headers });
  }

  public getSellSheets() {
    let headers = this.getHeaders();
    let url = this.apiUrl + 'wp/v2/salessheets?per_page=100';
    return this.http.get(url, { headers: headers });
  }

  public getSds() {
    let headers = this.getHeaders();
    let url = this.apiUrl + 'wp/v2/sds?per_page=100';
    return this.http.get(url, { headers: headers });
  }

  public getProducts() {
    let headers = this.getHeaders();
    let url = this.apiUrl + 'wp/v2/products?per_page=100';
    return this.http.get(url, { headers: headers });
  }

  public getProduct(id) {
    let headers = this.getHeaders();
    let url = this.apiUrl + 'wp/v2/products/' + id;
    return this.http.get(url, { headers: headers });
  }

  public getProductInfo(id) {
    let headers = this.getHeaders();
    let url = this.apiUrl + 'ignitro/v1/product-info/' + id;
    return this.http.get(url, { headers: headers });
  }

  public getCategories() {
    let headers = this.getHeaders();
    let url = this.apiUrl + 'ignitro/v1/app-categories/theme-options';
    return this.http.get(url, { headers: headers });
  }

  public getCategory(id) {
    let headers = this.getHeaders();
    let url = this.apiUrl + 'ignitro/v1/posts-by-cat/post/category/' + id;
    return this.http.get(url, { headers: headers });
  }

  public submitNewsletter(email) {
    let headers = this.getHeaders();
    let url = 'https://www.formcure.com/customprocessors/lubegard/newsletter.php';
    var data = {
      'FormID': '9CIH2KOTFRA',
      'email': email
    };
    let data1 = this.getFormData(data);
    return this.http.post(url, data1, { headers: headers });
  }


  public setData(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  public getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  public openUrl(url, title = '') {
    this.app.getActiveNav().push('ViewPage', { url: url, title: title });
    // var win = window.open(url, '_blank');
    // win.focus();
  }
}