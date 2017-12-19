import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AddDebtPage } from '../add-debt/add-debt';
import { DebtPage } from '../debt/debt';
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
  public debtlist: DebtPage[] = [];
  constructor(public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataProvider, public navCtrl: NavController){
 
      
      if(this.dataService.getDebts().length > 0) {
        this.debtlist = this.dataService.getDebts();
      }
      
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

  addDebt(item) {
    let addModal = this.modalCtrl.create(AddDebtPage, {trip: this.title});
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
  }
 
  saveItem(item){
    this.debtlist.push(item);
    this.dataService.saveDebts(this.debtlist);

  }
  
  /*viewItem(item){
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }*/
}

