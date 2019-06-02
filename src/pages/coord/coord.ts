import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, ViewController  } from 'ionic-angular';
import { PraticienItem } from "../../models/item/praticien.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import * as moment from 'moment';

@Component({
  selector: 'page-coord',
  templateUrl: 'coord.html',
})
export class CoordPage {

  //création d'un nouvel objet
  praticienItem = {} as PraticienItem;
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();

  praticienItemRef$: FirebaseListObservable<PraticienItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController, private toast: ToastController, public viewCtrl: ViewController) {

    this.praticienItemRef$ = this.database.list('praticien-list');
  }

  addPraticienItem(praticienItem: PraticienItem){
    //console.log(medicItem);
    /*
      Création d'un nouvel objet anonyme et conversion itemQuantite en un nombre.
      Push vers la firebase dans la partie medic-list.
    */
    this.praticienItemRef$.push({
    itemNom: this.praticienItem.itemNom,
    itemPrenom: this.praticienItem.itemPrenom,
    itemAdresse: this.praticienItem.itemAdresse,
    itemSpec: this.praticienItem.itemSpec,
  });
  let preselectedDate = moment(this.navParams.get('selectedDay')).format();
  this.event.startTime = preselectedDate;
  this.event.endTime = preselectedDate;
  }

  cancel() {
  this.viewCtrl.dismiss();
  }

  save() {
  this.viewCtrl.dismiss(this.event);
  }




  selectPraticienItem (praticienItem : PraticienItem) {

     /*
     Affichage du tableau d'action qui nous donnent les options suivantes :

     1. Ajouter un objet praticien
     2. Supprimer l'objet praticien
     3. Annuler la séléction
     */

           this.actionSheetCtrl.create({
           title: `${praticienItem.itemNom}`,
           buttons: [
             {
           text: 'Ajouter',
           handler: () =>{

         this.navCtrl.push(CoordPage,
         {medicItemId : praticienItem.$key});
         //Envoie l'utilisateur à la page de modification des praticiens et passe la clé comme un paramètre.
       }

           },
           {
             text: 'Supprimer',
             role: 'destructive',
             handler: () => {
               this.praticienItemRef$.remove(praticienItem.$key);
             }
           },
           {
             text: 'Annuler',
             role: 'annuler',
             handler: () => {
               console.log('Un utilisateur à sélectionner le bouton annuler');
             }
           }
       ]
     }).present();
  }
}
