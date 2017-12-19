import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DebtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-debt',
  templateUrl: 'debt.html',
})
export class DebtPage {

  person: string;
  description: string;
  amount: number;
  currency: string;
  paid: boolean;
  trip: string;

  constructor(_person: string, _description: string, _amount: number, _currency: string, _paid: boolean, _trip: string) {
    this.person = _person;
    this.description = _description;
    this.amount = _amount;
    this.currency = _currency;
    this.paid = _paid;
    this.trip = _trip;
  }

  


}
