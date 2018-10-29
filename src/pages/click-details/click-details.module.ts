import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClickDetailsPage } from './click-details';

@NgModule({
  declarations: [
    ClickDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClickDetailsPage),
  ],
})
export class ClickDetailsPageModule {}
