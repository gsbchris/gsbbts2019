import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { GfraisItem } from "../../models/item/gfrais.model";

@Component({
  selector: 'page-edit-frais-item',
  templateUrl: 'edit-frais-item.html',
})
export class EditFraisItemPage {

  gfraisItem = {} as GfraisItem;

  gfraisItemRef$: FirebaseObjectObservable<GfraisItem>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {

      const gfraisItemId = this.navParams.get('gfraisItemId');

      console.log(gfraisItemId);

      this.gfraisItemRef$ = this.database.object(`gfrais-list/${gfraisItemId}`);

        this.gfraisItemRef$.subscribe(
          gfraisItem => this.gfraisItem = gfraisItem);


  }

  editGfraisItem(gfraisItem: GfraisItem){
    this.gfraisItemRef$.update(gfraisItem);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditfraisItemPage');
  }

}
