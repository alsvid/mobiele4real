import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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

    tripTitle: string;
    person: string;
    description: string;
    amount: number;
    currency: string;
    paid: boolean;

    constructor(public navCtrl: NavController, public view: ViewController, params: NavParams) {
        this.tripTitle = params.get('tripTitle');
    }

    saveItem() {

        let newDebt = {
            trip: this.tripTitle,
            person: this.person,
            description: this.description,
            amount: this.amount,
            currency: this.currency,
            paid: this.paid
        };

        this.view.dismiss(newDebt);
    }

    close() {
        this.view.dismiss();
    }

}
