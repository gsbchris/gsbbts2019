import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { MedicItem } from "../../models/item/medic.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  //création d'un nouvel objet
  medicItem = {} as MedicItem;

  medicItemRef$: FirebaseListObservable<MedicItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public toastCtrl: ToastController, private actionSheetCtrl : ActionSheetController) {
    this.medicItemRef$ = this.database.list('medic-list');



    /*
      medic-list:
        0:
          itemNom: 'Doliprane',
          itemQuantite : 1,
          itemPrix: 6

          1:
            itemNom: 'Efferalgan',
            itemQuantite : 2,
            itemPrix: 7
    */
  }

  addMedicItem(medicItem: MedicItem){
    //console.log(medicItem);
    /*
      Création d'un nouvel objet anonyme et conversion itemQuantite en un nombre.
      Push vers la firebase dans la partie medic-list.
    */
    this.medicItemRef$.push({
    itemNom: this.medicItem.itemNom,
    itemQuantite: Number(this.medicItem.itemQuantite),
    itemPrix: Number(this.medicItem.itemPrix)
  });
  let toast = this.toastCtrl.create({
    message: 'Un médicament à été ajouté',
    duration: 3000,
    position: 'middle'
  });
toast.present();

  this.navCtrl.setRoot(ListPage);

  }
  selectMedicItem (medicItem : MedicItem) {

    /*
    Affichage du tableau d'action qui nous donnent les options suivantes :

    1. Ajouter un objet Medic
    2. Supprimer l'objet Medic
    3. Annuler la séléction
    */

          this.actionSheetCtrl.create({
          title: `${medicItem.itemNom}`,
          buttons: [
            {
          text: 'Ajouter',
          handler: () =>{

        this.navCtrl.push(ListPage,
        {medicItemId : medicItem.$key});
        //Envoie l'utilisateur à la page de modification des médics et passe la clé comme un paramètre.
      }

          },
          {
            text: 'Supprimer',
            role: 'destructive',
            handler: () => {
              this.medicItemRef$.remove(medicItem.$key);
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
