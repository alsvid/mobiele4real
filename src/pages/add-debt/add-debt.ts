import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DebtPage } from '../debt/debt';

/**
 * Generated class for the AddDebtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-debt',
  templateUrl: 'add-debt.html',
})
export class AddDebtPage {

  person: string;
  description: string;
  amount: number;
  currency: string;
  paid: boolean;
  trip: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  }

  saveItem(){
    let debt = new DebtPage(this.person, this.description, this.amount, this.currency, false, this.navParams.get('trip'));
    this.view.dismiss(debt);
 
  }
 
  close(){
    this.view.dismiss();
  }

}
