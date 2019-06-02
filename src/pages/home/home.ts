import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { FactItem } from "../../models/item/fact.model";

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ListPage } from '../list/list';


//import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //création d'un nouvel objet
  // IMPORTANT TOUJOURS CREER UN OBJET

  constructor(private afAuth:AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController) {


      //Initialisation des objets.
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bienvenue sur GSB, ${data.email}`,
          duration: 3000,
          position: 'top'
        }).present();
      }
    })
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

}
