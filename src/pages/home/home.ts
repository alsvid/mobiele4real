import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../modals/add-item/add-item';
import { DetailPage } from '../detail/detail';
import { DataProvider } from '../../providers/data/data';
import { Trip } from '../../model/trip';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    trips: Trip[] = [];

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {

        this.dataService.getAllTripData().then((data) => {
            if (data !== null) {
                this.trips = data;
            }
        });

    }

    addItem() {
        let addModal = this.modalCtrl.create(AddItemPage);

        addModal.onDidDismiss((newTrip) => {
            if (newTrip != null) {
                this.saveItem(newTrip);
            }
        });

        addModal.present();
    }


    saveItem(newTrip: Trip) {
        this.trips.push(newTrip);
        this.dataService.saveTrips(this.trips);
    }

    viewItem(trip: Trip) {
        this.navCtrl.push(DetailPage, { tripParam: trip});
    }
}
