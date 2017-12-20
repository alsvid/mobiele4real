import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Debt } from '../../model/debt'
import { Trip } from '../../model/trip';

@Injectable()
export class DataProvider {

    constructor(public storage: Storage) {
        //Debug purposes
        storage.clear();
    }

    //Trips
    getAllTripData() {
        return this.storage.get('trips');
    }

    saveTrips(data: Trip[]) {
        console.log('data.ts saveTrip for: ' + data + ' = ' + this.storage.get('trips'));
        this.storage.set('trips', data);
    }

    //Debts
    getAllDebtData() {
        console.log('data.ts gotten all debtdata ' + this.storage.get('debts'));
        return this.storage.get('debts');
    }

    saveDebts(data: Debt[]) {
        this.storage.set('debts', data);
    }

    getDebtDataForTitle(title: string) {
       //To do
    }

}
