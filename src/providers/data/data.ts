import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Debt } from '../../model/debt';
import { Trip } from '../../model/trip';
import { Contact } from '../../model/contact';

@Injectable()
export class DataProvider {

    constructor(public storage: Storage) {
        //Debug purposes
       // storage.clear();
    }

    //Trips
    getAllTripData() {
        return this.storage.get('trips');
    }

    saveTrips(data: Trip[]) {
        this.storage.set('trips', data);
    }

    //Debts
    getAllDebtData() {
        return this.storage.get('debts');
    }

    saveDebts(data: Debt[]) {
        this.storage.set('debts', data);
    }

    getDebtDataForTitle(title: string) {
       //To do
    }

    //Contacts
    getAllContactData() {
        return this.storage.get('contacts');
    }

    saveContacts(data: Contact[]) {
        this.storage.set('contacts', data);
    }

    getDebtsForUserInTrip(user: string, trip:string): Debt[] {
        //PLEASE FIX DAT TRIPTITLE OOK MEE IS OPGESLAGEN, GEEN KEY = GEEN QUERY FFS
        let debtlist: Debt[] = [];
        this.getAllDebtData().then(element => {
            console.log("this is first element");
            console.log(element);
            element.forEach(element1 => {
                console.log("this is second element");
                console.log(element1);
                    if (element1.person.toLowerCase() == user.toLowerCase() /*&& element1.trip.tripTitle.toLowerCase() == trip.toLowerCase()*/) {
                        debtlist.push(element1);
                    }
                });
            });
        return debtlist;
    }

}
