import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TripDetailPage } from '../pages/trip-detail/detail';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { AddTripModal } from '../pages/modals/add-trip/add-trip';
import { AddDebtModal } from '../pages/modals/add-debt/add-debt';
import { AddContactModal } from '../pages/modals/add-contact/add-contact';
import { EditContactModal } from '../pages/modals/edit-contact/edit-contact';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { ConfigPage } from '../pages/config/config';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddTripModal,
        TripDetailPage,
        AddContactModal,
        EditContactModal,
        AddDebtModal,
        TabsPage,
        ConfigPage,
        ContactPage
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
        AddTripModal,
        TripDetailPage,
        AddDebtModal,
        EditContactModal,
        AddContactModal,
        TabsPage,
        ConfigPage,
        ContactPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        DataProvider, { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
