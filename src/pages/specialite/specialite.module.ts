import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialitePage } from './specialite';

@NgModule({
  declarations: [
    SpecialitePage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialitePage),
  ],
})
export class SpecialitePageModule {}
