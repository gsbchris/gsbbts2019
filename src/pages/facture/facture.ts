import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { FactItem } from "../../models/item/fact.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';



@Component({
  selector: 'page-facture',
  templateUrl: 'facture.html',
})
export class FacturePage {

  //création d'un nouvel objet
  factureItem = {} as FactItem;

  factureItemRef$ : FirebaseListObservable<FactItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController) {

    this.factureItemRef$ = this.database.list('facture-list');
  }

  addFactureItem(factureItem: FactItem){
    //console.log(medicItem);
    /*
      Création d'un nouvel objet anonyme et conversion itemQuantite en un nombre.
      Push vers la firebase dans la partie medic-list.
    */
    this.factureItemRef$.push({
    itemNom: this.factureItem.itemNom,
    itemNomDestinataire: this.factureItem.itemNomDestinataire,
    itemPrenom: this.factureItem.itemPrenom,
    itemAdresse: this.factureItem.itemAdresse,
    itemDate: this.factureItem.itemDate,
    itemFactNumero: Number(this.factureItem.itemfactnumero),
    itemPrix: Number(this.factureItem.itemPrix),

  });



  this.navCtrl.setRoot(FacturePage);

  }
  selectFactureItem (factureItem : FactItem) {

    /*
    Affichage du tableau d'action qui nous donnent les options suivantes :

    1. Ajouter un objet Facture
    2. Supprimer l'objet Facture
    3. Annuler la séléction
    */

          this.actionSheetCtrl.create({
          title: `${factureItem.itemNom}`,
          buttons: [
            {
          text: 'Ajouter',
          handler: () =>{


        this.navCtrl.push(FacturePage,
        {factureItemId : factureItem.$key});
        //Envoie l'utilisateur à la page de modification des factures et passe la clé comme un paramètre.
      }

          },
          {
            text: 'Supprimer',
            role: 'destructive',
            handler: () => {
              this.factureItemRef$.remove(factureItem.$key);
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
