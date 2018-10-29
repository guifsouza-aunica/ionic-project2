import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormDetailsPage } from './form-details';

@NgModule({
  declarations: [
    FormDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FormDetailsPage),
  ],
})
export class FormDetailsPageModule {}
