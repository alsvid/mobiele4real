
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DebtPage } from '../../pages/debt/debt';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  public providertempdebtlist: DebtPage[] = [];
  public providertempdebtobject: DebtPage;
  testvalues: DebtPage[] = [new DebtPage("Chris","Diensten :)",50,"EUR",false,"Germany")];
  public items = [];

  constructor(public storage: Storage){
    this.storage.set('debts', this.testvalues);
  }
 
  getData() {
    return this.storage.get('trips'); 
  }
 
  save(data){
    this.storage.set('trips', data);
  }

  saveDebts(data: DebtPage[]) {
    this.storage.set('debts', data)
  }

  getDebts(): DebtPage[] {
    this.providertempdebtlist = [];
    this.providertempdebtlist.push(new DebtPage("Chris","Diensten :)",50,"EUR",false,"Germany"));
    this.providertempdebtobject = null;
    this.storage.get('debts').then(value => {
      console.log(value);
      value.forEach(element => {
        console.log(element);
        if (element.paid == "false") {
          this.providertempdebtobject = new DebtPage(element.person, element.description, parseInt(element.amount), element.currency, false, element.trip);
        }
        else {
          this.providertempdebtobject = new DebtPage(element.person, element.description, parseInt(element.amount), element.currency, true, element.trip);
        }
        this.providertempdebtlist.push(this.providertempdebtobject);
        this.providertempdebtobject = null;
        this.providertempdebtlist.forEach(element1 => {
          console.log(element1.person + " " + element1.trip);
        });
      });
    });
    return this.providertempdebtlist;
    
    /*then(valueStr => {
      console.log("this is the valuestring" + valueStr);
      valueStr.forEach(element => {
        console.log("this is the element" + element);
        element.array.forEach(element1 => {
        console.log("this is the second element" + element1);
        if (element1.paid == "false") {
          this.providertempdebtobject = new DebtPage(element1.person, element1.description, parseInt(element1.amount), element1.currency, false, element1.trip);
        }
        else {
          this.providertempdebtobject = new DebtPage(element1.person, element1.description, parseInt(element1.amount), element1.currency, true, element1.trip);
        }
        this.providertempdebtlist.push(this.providertempdebtobject);
        this.providertempdebtobject = null;
      });
    });
    });
    return this.providertempdebtlist;*/
  }
}
