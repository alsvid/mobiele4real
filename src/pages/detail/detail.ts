import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AddDebtPage } from '../modals/add-debt/add-debt';
import { Debt } from '../../model/debt';
import { Trip } from '../../model/trip';

@IonicPage()
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})

export class DetailPage {
    debts: Debt[] = [];
    trip: Trip;

    constructor(public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider, public navCtrl: NavController) {
        this.trip = this.navParams.get('tripParam');

        //todo: filter op title
        this.dataService.getAllDebtData().then((data) => {
            if (data !== null) {
                this.debts = data;
            }
        });

    }

    addDebt(newItem) {
        let addDebtModal = this.modalCtrl.create(AddDebtPage, { tripTitle: this.trip.title });

        addDebtModal.onDidDismiss(newDebt => {
            if (newDebt !== null) {
                this.saveItem(newDebt);
            }
        });

        addDebtModal.present();
    }


    saveItem(newDebt) {
        this.debts.push(newDebt);
        this.dataService.saveDebts(this.debts);
    }

}

