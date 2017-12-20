import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Contact } from '../../../model/contact';

@Component({
    selector: 'modal-edit-contact',
    templateUrl: 'edit-contact.html',
})

export class EditContactModal {
    firstName: string;
    lastName: string;

    constructor(public view: ViewController, params: NavParams) {
        var contact: Contact = params.get('contact');

        console.log('editcontactmodal constr ' + contact.firstName)
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
    }

    updateItem() {
        let updatedContact = {
            firstName: this.firstName,
            lastName: this.lastName
        }

        this.view.dismiss(updatedContact);
    }

    close() {
        this.view.dismiss();
    }

}
