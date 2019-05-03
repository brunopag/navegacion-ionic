import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../../pages/pagina3/pagina3';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {nombre:'asdasd', apellido:'asdasd'},
    {nombre:'aaaa', apellido:'aaaaa'},
    {nombre:'sssss', apellido:'ssssss'},
    {nombre:'dddddd', apellido:'ddddd'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.mutantes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  goPage3(mutante:any){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page, { 'mutante': mutante });
  }

}
