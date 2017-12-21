import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Debt } from '../../model/debt';
import { Trip } from '../../model/trip';
import { Contact } from '../../model/contact';

@Injectable()
export class DataProvider {

    constructor(public storage: Storage) {
        //Debug purposes
       //storage.clear();
    }

    //Trips
    getAllTripData() {
        return this.storage.get('trips');
    }

    saveTrips(data: Trip[]) {
        this.storage.set('trips', data);
    }

    //Debts
    getAllDebtDataForTrip(tripTitle: string): Debt[] {
        let debtlist: Debt[] = [];
        this.storage.get('debts').then(element => {
            if (element == null || element.length == 0) {
                return null;
            }
            element.forEach(element1 => {
                if (element1 != null && element1.tripTitle.toLowerCase() == tripTitle.toLowerCase()) {
                    let tempDebt: Debt = new Debt(element1.tripTitle, element1.person, element1.description, parseInt(element1.amount), element1.currency, element1.paid);
                    debtlist.push(tempDebt);
                }
            });
        });
        if (debtlist.length > 0 && debtlist != null) {return debtlist}
        else {
            return null;
        }
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
        console.log("started method");
        this.storage.get('debts').then(element => {
            console.log("Tried getting element ");
            if (element == null) {
                return null;
            }
            element.forEach(element1 => {
                if (element1 == null) { return null }
                console.log("this is second element");
                console.log(element1);
                    if (element1.person.toLowerCase() == user.toLowerCase() && element1.tripTitle.toLowerCase() == trip.toLowerCase()) {
                        debtlist.push(element1);
                    }
                });
            });
        if (debtlist.length > 0 && debtlist != null) {return debtlist}
        else {
            return null;
        }
    }

    temporaryTripTitleGet(): Promise<any> {
        return this.storage.get('temptitle');
    }

    temporaryTripTitleSave(title: Trip) {
        this.storage.set('temptitle',title);
    }

    temporaryTripTitleDelete() {
        this.storage.remove('temptitle');
    }

    

}
