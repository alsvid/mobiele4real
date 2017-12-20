import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'modal-add-contact',
    templateUrl: 'add-contact.html',
})

export class AddContactModal {
    firstName: string;
    lastName: string;

    constructor(public view: ViewController) {
    }

    saveItem() {
        let newContact = {
            firstName: this.firstName,
            lastName: this.lastName
        }

        this.view.dismiss(newContact);
    }

    close() {
        this.view.dismiss();
    }

}
