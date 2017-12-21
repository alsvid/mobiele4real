import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SplashPage } from '../pages/splash/splash';

@Component({
    templateUrl: 'app.html'
})

export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            /*let splash = modalCtrl.create(SplashPage);
            splash.present();*/
            //uncomment voor splashscreen, en comment splashscreen.hide()
        });
    }
}

