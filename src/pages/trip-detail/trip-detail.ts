import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { DebtDetailPage } from '../debt-detail/debt-detail';
import { AddDebtModal } from '../modals/add-debt/add-debt';
import { EditDebtModal } from '../modals/edit-debt/edit-debt';
import { GetUserModal } from '../modals/get-user/get-user';
import { Debt } from '../../model/debt';
import { Trip } from '../../model/trip';

@Component({
    selector: 'page-trip-detail',
    templateUrl: 'trip-detail.html',
})

export class TripDetailPage {
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
        let addDebtModal = this.modalCtrl.create(AddDebtModal, { tripTitle: this.trip.title });

        addDebtModal.onDidDismiss(newDebt => {
            if (newDebt !== null) {
                this.saveItem(newDebt);
            }
        });

        addDebtModal.present();
    }

    editDebt(debt: Debt) {
        let editModal = this.modalCtrl.create(EditDebtModal, { debt: debt });
        let index = this.debts.indexOf(debt)

        editModal.onDidDismiss((newD) => {
            if (newD != null) {
                this.debts[index] = newD;
            }
        });
        editModal.present();

    }

    getUserDebts() {
        let userModal = this.modalCtrl.create(GetUserModal, {tripTitle: this.trip.title});

        userModal.onDidDismiss((personaldata, user) => {
            if (personaldata != null && user != null) {
                this.trip.title = user;
                this.debts = personaldata;
            }
        });

        userModal.present();
    }

    saveItem(newDebt) {
        this.debts.push(newDebt);
        this.dataService.saveDebts(this.debts);
    }

    deleteDebt(debt: Debt) {
        let index = this.debts.indexOf(debt);

        if (index > -1) {
            this.debts.splice(index, 1);
        }
    }

    viewDebt(debt: Debt) {
        this.navCtrl.push(DebtDetailPage, { debt: debt });
    }
}

