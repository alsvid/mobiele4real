import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DebtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-debt',
  templateUrl: 'debt.html',
})
export class DebtPage {

  person;
  description;
  amount;
  currency;
  paid;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.amount = this.navParams.get('item').amount;
    this.currency = this.navParams.get('item').currency;
    this.paid = this.navParams.get('item').currency;
  }
  

}
