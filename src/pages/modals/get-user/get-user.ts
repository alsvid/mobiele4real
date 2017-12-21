import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { Debt } from '../../../model/debt';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the GetUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-get-user',
  templateUrl: 'get-user.html',
})
export class GetUserModal {

  person: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider, public view: ViewController) {
  }

  getUserData() {
    let user = this.person;
    let personaldata: Debt[] = this.dataService.getDebtsForUserInTrip(this.person, this.navParams.get('tripTitle'));

    this.view.dismiss(personaldata, user);
  }

  close() {
    this.view.dismiss();
  }


}
