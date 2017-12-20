import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Debt } from '../../../model/debt';

@Component({
    selector: 'modal-edit-debt',
    templateUrl: 'edit-debt.html',
})

export class EditDebtModal {
    debt: Debt;

    constructor(public view: ViewController, params: NavParams) {
        this.debt = params.get('debt');
    }

    updateItem() {
        this.view.dismiss(this.debt);
    }

    close() {
        this.view.dismiss();
    }

}
