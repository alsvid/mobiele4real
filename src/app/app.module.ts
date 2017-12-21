import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TripDetailPage } from '../pages/trip-detail/trip-detail';
import { DebtDetailPage } from '../pages/debt-detail/debt-detail';
import { DataProvider } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import { AddTripModal } from '../pages/modals/add-trip/add-trip';
import { AddDebtModal } from '../pages/modals/add-debt/add-debt';
import { AddContactModal } from '../pages/modals/add-contact/add-contact';
import { EditContactModal } from '../pages/modals/edit-contact/edit-contact';
import { EditTripModal } from '../pages/modals/edit-trips/edit-trip'
import { EditDebtModal } from '../pages/modals/edit-debt/edit-debt';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { ConfigPage } from '../pages/config/config';
import { GetUserModal } from '../pages/modals/get-user/get-user';
import { SplashPage } from '../pages/splash/splash'

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddTripModal,
        TripDetailPage,
        DebtDetailPage,
        AddContactModal,
        EditContactModal,
        EditTripModal,
        EditDebtModal,
        AddDebtModal,
        TabsPage,
        ConfigPage,
        ContactPage,
        GetUserModal,
        SplashPage
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
        DebtDetailPage,
        AddDebtModal,
        EditContactModal,
        AddContactModal,
        EditTripModal,
        EditDebtModal,
        TabsPage,
        ConfigPage,
        ContactPage,
        GetUserModal,
        SplashPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        DataProvider, { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
