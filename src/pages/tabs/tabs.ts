import { Component } from '@angular/core';

import { EstantePage } from '../estante/estante';
import { BuscaPage } from '../busca/busca';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = BuscaPage;
  tab2Root = EstantePage;

  constructor() {

  }
}
