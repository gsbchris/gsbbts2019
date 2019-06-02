import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, ViewController  } from 'ionic-angular';
import { VisiteurItem } from "../../models/item/visiteur.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { EditVisiteItemPage } from "../edit-visite-item/edit-visite-item";

//import * as moment from 'moment';

@Component({
  selector: 'page-visite',
  templateUrl: 'visite.html',
})
export class VisitePage {

  //création d'un nouvel objet
  visiteurItem = {} as VisiteurItem;
//  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
//  minDate = new Date().toISOString();

  visiteurItemRef$: FirebaseListObservable<VisiteurItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController, private toast: ToastController, public viewCtrl: ViewController) {

    this.visiteurItemRef$ = this.database.list('visiteur-list');
  }

  addVisiteurItem(visiteurItem: VisiteurItem){
    //console.log(medicItem);
    /*
      Création d'un nouvel objet anonyme et conversion itemQuantite en un nombre.
      Push vers la firebase dans la partie medic-list.
    */
    this.visiteurItemRef$.push({
    itemNom: this.visiteurItem.itemNom,
    itemTitre: this.visiteurItem.itemTitre,
    itemDateprev: this.visiteurItem.itemDateprev,
    itemPraticien: this.visiteurItem.itemPraticien,
    itemCoeff: this.visiteurItem.itemCoeff,
    itemRemplacant: this.visiteurItem.itemRemplacant,
    itemDatereel: this.visiteurItem.itemDatereel,
    itemBilan: this.visiteurItem.itemBilan,
  });
  // let preselectedDate = moment(this.navParams.get('selectedDay')).format();
  // this.event.startTime = preselectedDate;
  // this.event.endTime = preselectedDate;
  }

  // cancel() {
  // this.viewCtrl.dismiss();
  // }
  //
  // save() {
  // this.viewCtrl.dismiss(this.event);
  // }




  selectvisiteurItem (visiteurItem : VisiteurItem) {

     /*
     Affichage du tableau d'action qui nous donnent les options suivantes :

     1. Ajouter un objet praticien
     2. Supprimer l'objet praticien
     3. Annuler la séléction
     */

           this.actionSheetCtrl.create({
           title: `${visiteurItem.itemNom}`,
           buttons: [
             {
           text: 'Ajouter',
           handler: () =>{

         this.navCtrl.push(VisitePage,
         {visiteurItemId : visiteurItem.$key});
         //Envoie l'utilisateur à la page de modification des praticiens et passe la clé comme un paramètre.
       }

           },
           {
             text: 'Supprimer',
             role: 'destructive',
             handler: () => {
               this.visiteurItemRef$.remove(visiteurItem.$key);
             }
           },

           {
             text: 'Modifier',
             handler: () => {
               this.navCtrl.push(EditVisiteItemPage,
              { visiteurItemId: visiteurItem.$key});
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
