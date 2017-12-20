import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'modal-add-trip',
    templateUrl: 'add-trip.html',
})
export class AddTripModal {

    title: string;
    description: string;

    constructor(public view: ViewController) {

    }

    saveItem() {
        let item = {
            title: this.title,
            description: this.description
        };

        this.view.dismiss(item);
    }

    close() {
        this.view.dismiss();
    }

}
