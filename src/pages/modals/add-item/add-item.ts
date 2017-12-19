import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-add-item',
    templateUrl: 'add-item.html',
})
export class AddItemPage {

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
