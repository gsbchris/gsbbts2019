import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { RdvItem } from "../../models/item/rdv.model";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';



@IonicPage()
@Component({
  selector: 'page-rdv',
  templateUrl: 'rdv.html',
})
export class RdvPage {

  rdvItem = {} as RdvItem;

  rdvItemRef$ : FirebaseListObservable<RdvItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl : ActionSheetController) {

    this.rdvItemRef$ = this.database.list('rdv-list');
  }

  addRdvItem(rdvItem: RdvItem){
    //console.log(medicItem);
    /*
      Création d'un nouvel objet anonyme et conversion itemQuantite en un nombre.
      Push vers la firebase dans la partie frais-list.
    */
    this.rdvItemRef$.push({
    itemNom: this.rdvItem.itemNom,
    itemDatec: this.rdvItem.itemDatec,
    itemDatef: this.rdvItem.itemDatef,
    itemAdresse: this.rdvItem.itemAdresse,



  });



  this.navCtrl.setRoot(RdvPage);

  }
  selectRdvItem (rdvItem : RdvItem) {

    /*
    Affichage du tableau d'action qui nous donnent les options suivantes :

    1. Ajouter un objet Facture
    2. Supprimer l'objet Facture
    3. Annuler la séléction
    */

          this.actionSheetCtrl.create({
          title: `${rdvItem.itemNom}`,
          buttons: [
            {
          text: 'Ajouter',
          handler: () =>{


        this.navCtrl.push(RdvPage,
        {rdvItemId : rdvItem.$key});
        //Envoie l'utilisateur à la page de modification des factures et passe la clé comme un paramètre.
      }

          },
          {
            text: 'Supprimer',
            role: 'destructive',
            handler: () => {
              this.rdvItemRef$.remove(rdvItem.$key);
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
