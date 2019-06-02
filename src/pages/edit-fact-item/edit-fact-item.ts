import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { FactItem } from "../../models/item/fact.model";

@Component({
  selector: 'page-edit-fact-item',
  templateUrl: 'edit-fact-item.html',
})
export class EditFactItemPage {

  factItem = {} as FactItem;

  factItemRef$: FirebaseObjectObservable<FactItem>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {

      const factItemId = this.navParams.get('factItemId');

      console.log(factItemId);

      this.factItemRef$ = this.database.object(`facture-list/${factItemId}`);

        this.factItemRef$.subscribe(
          factItem => this.factItem = factItem);


  }

  editFactItem(factItem: FactItem){
    this.factItemRef$.update(factItem);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditFactItemPage');
  }

}
