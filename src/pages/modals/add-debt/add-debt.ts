import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Debt } from '../../../model/debt';
@Component({
    selector: 'page-add-debt',
    templateUrl: 'add-debt.html',
})

export class AddDebtModal {
    debt: Debt;
    tripTitle: string;

    constructor(public view: ViewController, params: NavParams) {
        this.tripTitle = params.get('tripTitle');
        this.debt = new Debt(this.tripTitle, '', '', 0, '', false);
    }

    saveItem() {
        this.view.dismiss(this.debt);
    }

    close() {
        this.view.dismiss();
    }

}
