import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../modals/add-item/add-item';
import { DetailPage } from '../detail/detail';
import { DataProvider } from '../../providers/data/data';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    public items = [];

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {

        this.dataService.getAllTripData().then((trips) => {

            if (trips) {
                this.items = trips;
            }

        });
    }

    addItem() {
        let addModal = this.modalCtrl.create(AddItemPage);

        addModal.onDidDismiss((item) => {
            if (item != null) {
                this.saveItem(item);
            }
        });

        addModal.present();
    }

    saveItem(item) {
        this.items += item;
        this.dataService.saveTrips(this.items);
    }

    viewItem(item) {
        this.navCtrl.push(DetailPage, {
            item: item
        });
    }
}
