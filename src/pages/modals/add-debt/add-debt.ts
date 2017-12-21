import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Debt } from '../../../model/debt';
import { Trip } from '../../../model/trip';
import { DataProvider } from '../../../providers/data/data';
@Component({
    selector: 'page-add-debt',
    templateUrl: 'add-debt.html',
})

export class AddDebtModal {
    
    person: string;
    description: string;
    amount: number;
    currency: string;
    paid: boolean;
    tripTitle: string;

    constructor(public view: ViewController, public params: NavParams, public dataService: DataProvider) {
      
    }

    saveItem() {
    let triptemp: Trip;
    this.dataService.temporaryTripTitleGet().then(response =>
    {
        triptemp = new Trip(response.title, response.description);
    });
    let newDebt: Debt = new Debt(triptemp.title, this.person, this.description, this.amount, this.currency, false);
    this.dataService.temporaryTripTitleDelete();
    this.view.dismiss(newDebt);
    }

    close() {
        this.view.dismiss();
    }

}
