import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Trip } from '../../../model/trip';
import { Contact } from '../../../model/contact';
import { DataProvider } from "../../../providers/data/data";

@Component({
    selector: 'modal-add-trip',
    templateUrl: 'add-trip.html',
})
export class AddTripModal {
    trip: Trip;
    contacts: Contact[] = [];
    selectedContacts: Contact[] = [];

    constructor(public view: ViewController, public dataService: DataProvider) {

        console.log('constructor' + this.contacts.toString);
        this.loadContacts();
        this.trip = new Trip('', '');
    }

    saveItem() {
        console.log('saveitem'+this.selectedContacts.toString);

        this.contacts.forEach(c => {
            this.trip.addParticipant(c);
        })
        this.view.dismiss(this.trip);
    }

    close() {
        this.view.dismiss();
    }

    valueChange() {
        this.loadContacts();
        console.log('valChangd'+this.selectedContacts.toString);
        console.log(this.contacts.toString);

    }

    loadContacts() {
        this.dataService.getAllContactData().then((data) => {
            if (data !== null) {
                this.contacts = data;
            }
        });
    }
}
