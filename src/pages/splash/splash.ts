import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public splashScreen: SplashScreen, public viewCtrl: ViewController) {
  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    setTimeout(() => {
      this.viewCtrl.dismiss();
    },4000);
  }


}