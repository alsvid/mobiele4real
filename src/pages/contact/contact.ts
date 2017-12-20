import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { AddContactModal } from '../modals/add-contact/add-contact';
import { EditContactModal } from '../modals/edit-contact/edit-contact';
import { Contact } from '../../model/contact';
import { DataProvider } from "../../providers/data/data";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    contacts: Contact[] = [];

    constructor(public modalCtrl: ModalController, public dataService: DataProvider) {

    }

    addContact() {
        let addModal = this.modalCtrl.create(AddContactModal);

        addModal.onDidDismiss((newContact) => {
            if (newContact != null) {
                this.saveContact(newContact);
            }
        });
        addModal.present();
    }

    editContact(contact: Contact) {
        let editModal = this.modalCtrl.create(EditContactModal, { contact: contact });
        let index = this.contacts.indexOf(contact)

        editModal.onDidDismiss((newC) => {
            if (newC != null) {
                this.contacts[index] = newC;
            }
        });
        editModal.present();

    }


    saveContact(newContact: Contact) {
        this.contacts.push(newContact);
        this.dataService.saveContacts(this.contacts);
    }

    deleteContact(contact: Contact) {
        let index = this.contacts.indexOf(contact);

        if (index > -1) {
            this.contacts.splice(index, 1);
        }
    }


}
