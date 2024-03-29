import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PrincipalPage } from '../../pages/principal/principal';
import { AjustesPage } from '../../pages/ajustes/ajustes';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;
  }

}
