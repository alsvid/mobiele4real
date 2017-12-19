import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
    templateUrl: 'app.html'
})


/*Not sure dat dit de way to go is, maar bij IP Major had ik zo externe klasses gemaakt.
export class Item {
    title: string;
    description: string;
}

export class Debt {
    tripTitle: string;
    person: string;
    description: string;
    amount: number;
    currency: string;
    paid: boolean;
}*/

export class MyApp {
    rootPage: any = HomePage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

