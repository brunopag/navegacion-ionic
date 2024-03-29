import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    console.log(this.navParams.get("nombre"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarModal(){
    let data:any = "Data desde modal";
    this.viewCtrl.dismiss({data: data});
  }

}
