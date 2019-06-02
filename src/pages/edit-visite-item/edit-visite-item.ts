import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { VisiteurItem } from "../../models/item/visiteur.model";

@Component({
  selector: 'page-edit-visite-item',
  templateUrl: 'edit-visite-item.html',
})
export class EditVisiteItemPage {

  visiteurItem = {} as VisiteurItem;

  visiteurItemRef$: FirebaseObjectObservable<VisiteurItem>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {

      const visiteurItemId = this.navParams.get('visiteurItemId');

      console.log(visiteurItemId);

      this.visiteurItemRef$ = this.database.object(`visiteur-list/${visiteurItemId}`);

        this.visiteurItemRef$.subscribe(
          visiteurItem => this.visiteurItem = visiteurItem);


  }

  editVisiteurItem(visiteurItem: VisiteurItem){
    this.visiteurItemRef$.update(visiteurItem);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditvisiteItemPage');
  }

}
