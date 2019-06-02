import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { SpecialiteItem } from "../../models/item/specialite.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';



@Component({
  selector: 'page-specialite',
  templateUrl: 'specialite.html',
})
export class SpecialitePage {

  //création d'un nouvel objet
  specialiteItem = {} as SpecialiteItem;

  specialiteItemRef$ : FirebaseListObservable<SpecialiteItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController) {

    this.specialiteItemRef$ = this.database.list('specialite-list');
  }
  addSpecialiteItem(specialiteItem: SpecialiteItem){
    //console.log(medicItem);
    /*
      Création d'un nouvel objet anonyme et conversion itemQuantite en un nombre.
      Push vers la firebase dans la partie frais-list.
    */
    this.specialiteItemRef$.push({
    itemSpecialite1: this.specialiteItem.itemSpecialite1,
    itemSpecialite2: this.specialiteItem.itemSpecialite2,
    itemSpecialite3: this.specialiteItem.itemSpecialite3,




  });
  this.navCtrl.setRoot(SpecialitePage);

  }
  selectSpecialiteItem (specialiteItem : SpecialiteItem) {

    /*
    Affichage du tableau d'action qui nous donnent les options suivantes :

    1. Ajouter un objet Facture
    2. Supprimer l'objet Facture
    3. Annuler la séléction
    */

          this.actionSheetCtrl.create({
          title: `${specialiteItem.itemSpecialite1}`,
          buttons: [
            {
          text: 'Ajouter',
          handler: () =>{


        this.navCtrl.push(SpecialitePage,
        {specialiteItemId : specialiteItem.$key});
        //Envoie l'utilisateur à la page de modification des factures et passe la clé comme un paramètre.
      }

          },
          {
            text: 'Supprimer',
            role: 'destructive',
            handler: () => {
              this.specialiteItemRef$.remove(specialiteItem.$key);
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
