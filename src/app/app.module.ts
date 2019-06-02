import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {RegisterPage} from "../pages/register/register";
import { ListPage } from '../pages/list/list';
import { CoordPage } from '../pages/coord/coord';
import { HttpModule } from '@angular/http';
import {LoginPage} from "../pages/login/login";
import {HomePage} from "../pages/home/home";
import {FacturePage} from "../pages/facture/facture";

//import {CalendrierPage } from"../pages/calendrier/calendrier";
//import { EventModalPage } from "../pages/event-modal/event-modal";

import {SpecialitePage } from "../pages/specialite/specialite";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import { Toast } from '@ionic-native/toast';

import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  declarations: [
    MyApp,
    ListPage,
    LoginPage,
    CoordPage,
    RegisterPage,
    FacturePage,
    SpecialitePage,
  //  CalendrierPage,

  //  EventModalPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    NgCalendarModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LoginPage,
    CoordPage,
    RegisterPage,
    FacturePage,
//    CalendrierPage,

    SpecialitePage,
  //  EventModalPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    Toast
  ]
})
export class AppModule {}
