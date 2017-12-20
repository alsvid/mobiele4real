import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { AddItemPage } from '../pages/modals/add-item/add-item';
import { AddDebtPage } from '../pages/modals/add-debt/add-debt';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    DetailPage,
    AddDebtPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    DetailPage,
    AddDebtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
