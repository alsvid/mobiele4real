import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddTripModal } from '../modals/add-trip/add-trip';
import { EditTripModal } from '../modals/edit-trips/edit-trip'
import { TripDetailPage } from '../trip-detail/trip-detail';
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
        let addModal = this.modalCtrl.create(AddTripModal);

        addModal.onDidDismiss((newTrip) => {
            if (newTrip != null) {
                this.saveItem(newTrip);
            }
        });

        addModal.present();
    }

    editTrip(trip: Trip) {
        console.log(trip.participants.toString);
        let editModal = this.modalCtrl.create(EditTripModal, { trip: trip });
        let index = this.trips.indexOf(trip)

        editModal.onDidDismiss((newT) => {
            if (newT != null) {
                this.trips[index] = newT;
            }
        });
        editModal.present();

    }


    saveItem(newTrip: Trip) {
        this.trips.push(newTrip);
        this.dataService.saveTrips(this.trips);
    }

    viewItem(trip: Trip) {
        this.navCtrl.push(TripDetailPage, { tripParam: trip});
    }

    deleteTrip(trip: Trip) {
        let index = this.trips.indexOf(trip);

        if (index > -1) {
            this.trips.splice(index, 1);
        }
    }
}
