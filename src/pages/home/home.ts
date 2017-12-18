import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { DetailPage } from '../detail/detail';
import { DataProvider } from '../../providers/data/data';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {
 
    this.dataService.getData().then((trips) => {
 
      if(trips){
        this.items = trips;
      }
 
    });
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 
  viewItem(item){
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }
}