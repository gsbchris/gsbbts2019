import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { MedicItem } from "../../models/item/medic.model";

@Component({
  selector: 'page-edit-medic-item',
  templateUrl: 'edit-medic-item.html',
})
export class EditMedicItemPage {

  medicItem = {} as MedicItem;

  medicItemRef$: FirebaseObjectObservable<MedicItem>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {

      const medicItemId = this.navParams.get('medicItemId');

      console.log(medicItemId);

      this.medicItemRef$ = this.database.object(`medic-list/${medicItemId}`);

        this.medicItemRef$.subscribe(
          medicItem => this.medicItem = medicItem);


  }

  editMedicItem(medicItem: MedicItem){
    this.medicItemRef$.update(medicItem);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMedicItemPage');
  }

}
