import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-add-debt',
    templateUrl: 'add-debt.html',
})

export class AddDebtModal {

    tripTitle: string;
    person: string;
    description: string;
    amount: number;
    currency: string;
    paid: boolean;

    constructor(public view: ViewController, params: NavParams) {
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
