import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { ListasPage } from '../listas/listas';
import { TurmasPage } from '../turmas/turmas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = ListasPage ;
  tab3Root = TurmasPage;
  constructor() {

  }
}
