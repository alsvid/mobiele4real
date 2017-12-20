import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Contact } from '../../../model/contact';

@Component({
    selector: 'modal-edit-contact',
    templateUrl: 'edit-contact.html',
})

export class EditContactModal {
    contact: Contact;

    constructor(public view: ViewController, params: NavParams) {
        this.contact = params.get('contact');

    }

    updateItem() {
        this.view.dismiss(this.contact);
    }

    close() {
        this.view.dismiss();
    }

}
