import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../../pages/modal/modal';

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  irTabHome(){
    this.navCtrl.parent.select(1);
  }

  abrirModal(){
    let modal = this.modalCtrl.create(ModalPage, { nombre: 'Bruno' });
    modal.present();
    modal.onDidDismiss(parametros => {
      console.log(parametros);
    })
  }

}
