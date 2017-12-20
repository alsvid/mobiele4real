import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Debt } from '../../model/debt';


@Component({
    selector: 'page-debt-detail',
    templateUrl: 'debt-detail.html',
})

export class DebtDetailPage {
    debt: Debt;

    constructor(public navParams: NavParams, public navCtrl: NavController) {
        this.debt = this.navParams.get('debt');
    }

}

