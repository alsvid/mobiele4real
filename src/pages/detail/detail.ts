import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  title;
  description;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}
