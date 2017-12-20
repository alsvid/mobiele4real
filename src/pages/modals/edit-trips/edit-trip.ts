import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Trip } from '../../../model/trip';

@Component({
    selector: 'modal-edit-trip',
    templateUrl: 'edit-trip.html',
})

export class EditTripModal {
    trip: Trip;

    constructor(public view: ViewController, params: NavParams) {
        this.trip = params.get('trip');
    }

    updateItem() {
        this.view.dismiss(this.trip);
    }

    close() {
        this.view.dismiss();
    }

}
