
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DataProvider {

    constructor(public storage: Storage) {
    }

    //Trips
    getAllTripData() {
        console.log('data.ts getAllTrips')
        return this.storage.get('trips');
    }

    saveTrips(data) {
        console.log(data);
        this.storage.set('trips', data);
    }

    //Debts
    getAllDebtData() {
        return this.storage.get('debts');
    }

    saveDebts(data) {
        console.log(data);
        this.storage.set('debts', data);
    }

    getDebtDataForTitle(title) {
        //return this.storage.forEach(element.tripTitle => {})
    }

}
