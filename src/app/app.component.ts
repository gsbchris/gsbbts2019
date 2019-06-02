import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {SpecialitePage} from '../pages/specialite/specialite';

import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { CoordPage } from '../pages/coord/coord';
import { LoginPage } from "../pages/login/login";
import { FacturePage } from "../pages/facture/facture";
import { RdvPage } from "../pages/rdv/rdv";

//import {CalendrierPage } from"../pages/calendrier/calendrier";
//import {EventModalPage } from"../pages/event-modal/event-modal";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Medicaments', component: ListPage },
      { title: 'Coordonnées', component: CoordPage },
      { title: 'Facture', component: FacturePage},
    //  { title: 'Calendrier', component: CalendrierPage},
      { title: 'Specialite', component: SpecialitePage},

      { title: 'Rendez-vous', component: RdvPage},
      { title: 'Déconnexion', component: LoginPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
