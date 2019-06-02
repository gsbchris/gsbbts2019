import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, ViewController  } from 'ionic-angular';
import { GfraisItem } from "../../models/item/gfrais.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { EditFraisItemPage } from "../edit-frais-item/edit-frais-item";

//import * as moment from 'moment';

@Component({
  selector: 'page-frais',
  templateUrl: 'frais.html',
})
export class FraisPage {

  //création d'un nouvel objet
  gfraisItem = {} as GfraisItem;
//  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
//  minDate = new Date().toISOString();

  gfraisItemRef$: FirebaseListObservable<GfraisItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController, private toast: ToastController, public viewCtrl: ViewController) {

    this.gfraisItemRef$ = this.database.list('gfrais-list');
  }

  addGfraisItem(gfraisItem: GfraisItem){
    //console.log(medicItem);
    /*
      Création d'un nouvel objet anonyme et conversion itemQuantite en un nombre.
      Push vers la firebase dans la partie medic-list.
    */
    this.gfraisItemRef$.push({
    itemDate: this.gfraisItem.itemDate,
    itemRepas: this.gfraisItem.itemRepas,
    itemNuits: this.gfraisItem.itemNuits,
    itemEtape: this.gfraisItem.itemEtape,
    itemKm: this.gfraisItem.itemKm,
    itemHorsForfaits: this.gfraisItem.itemHorsForfaits,
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




  selectGfraisItem (gfraisItem : GfraisItem) {

     /*
     Affichage du tableau d'action qui nous donnent les options suivantes :

     1. Ajouter un objet praticien
     2. Supprimer l'objet praticien
     3. Annuler la séléction
     */

           this.actionSheetCtrl.create({
           title: `${gfraisItem.itemDate}`,
           buttons: [
             {
           text: 'Ajouter',
           handler: () =>{

         this.navCtrl.push(FraisPage,
         {gfraisItemId : gfraisItem.$key});
         //Envoie l'utilisateur à la page de modification des praticiens et passe la clé comme un paramètre.
       }

           },
           {
             text: 'Supprimer',
             role: 'destructive',
             handler: () => {
               this.gfraisItemRef$.remove(gfraisItem.$key);
             }
           },

           {
             text: 'Modifier',
             handler: () => {
               this.navCtrl.push(EditFraisItemPage,
              { gfraisItemId: gfraisItem.$key});
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
