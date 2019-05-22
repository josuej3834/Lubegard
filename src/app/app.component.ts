import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';

import { WelcomePage } from '../pages/welcome/welcome';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  public email = '';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public serviceProvider: ServiceProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  signup() {
    if (this.email == '') return;
    this.serviceProvider.showLoading();
    this.serviceProvider.submitNewsletter(this.email).subscribe((data: any) => {
      this.serviceProvider.hideLoading();
      this.serviceProvider.showToast('Submitted Successfully');
      this.email = '';
    }, err => {
      this.serviceProvider.hideLoading();
      this.serviceProvider.showToast(err.error.text);
    })
  }
}

