import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Contact } from '../../../model/contact';

@Component({
    selector: 'modal-add-contact',
    templateUrl: 'add-contact.html',
})

export class AddContactModal {
    contact: Contact;

    constructor(public view: ViewController) {
        this.contact = new Contact('', '');
    }

    saveItem() {
        this.view.dismiss(this.contact);
    }

    close() {
        this.view.dismiss();
    }

}
