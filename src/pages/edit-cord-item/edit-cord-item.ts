import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { PraticienItem } from "../../models/item/praticien.model";

@Component({
  selector: 'page-edit-cord-item',
  templateUrl: 'edit-cord-item.html',
})
export class EditPraticienItemPage {

  praticienItem = {} as PraticienItem;

  praticienItemRef$: FirebaseObjectObservable<PraticienItem>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {

      const praticienItemId = this.navParams.get('praticienItemId');

      console.log(praticienItemId);

      this.praticienItemRef$ = this.database.object(`praticien-list/${praticienItemId}`);

        this.praticienItemRef$.subscribe(
          praticienItem => this.praticienItem = praticienItem);


  }

  editPraticienItem(praticienItem: PraticienItem){
    this.praticienItemRef$.update(praticienItem);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPraticienItemPage');
  }

}
