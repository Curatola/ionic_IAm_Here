import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListasPresencaPage } from './listasPresenca';

@NgModule({
  declarations: [
    ListasPresencaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListasPresencaPage),
  ],
})
export class ListasPageModule {}
