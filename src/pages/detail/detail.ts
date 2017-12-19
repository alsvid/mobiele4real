import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AddDebtPage } from '../modals/add-debt/add-debt';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})

export class DetailPage {
    public debts = [];

    title: string;
    description: string;


    constructor(public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider, public navCtrl: NavController) {
        this.title = this.navParams.get('item').title;
        this.description = this.navParams.get('item').description;

        //Todo: filter title
        this.dataService.getAllDebtData().then((debts) => {
            if (debts != null) {
                this.debts += debts;
            }
        });
    }

    addDebt(item) {
        let addDebtModal = this.modalCtrl.create(AddDebtPage, { tripTitle: this.title });

        addDebtModal.onDidDismiss(debt => {
            if (debt != null) {
                this.saveItem(item);
            }
        });

        addDebtModal.present();
    }


    saveItem(item) {
        this.debts += item;
        this.dataService.saveDebts(this.debts);
    }

    viewItem(item) {
        this.navCtrl.push(DetailPage, {
            item: item
        });
    }
}

