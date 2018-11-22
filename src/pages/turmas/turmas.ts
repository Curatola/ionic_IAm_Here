import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

/**
 * Generated class for the TurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turmas',
  templateUrl: 'turmas.html',
})
export class TurmasPage {

  turmas: Array<{ id: number, nome: string, ano: string, semestre: string }>
  constructor(public navCtrl: NavController, public navParams: NavParams, public requests: RequestProvider) {
    this.load()
  }

  async load() {
    this.turmas = await this.requests.get("turmas")
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurmasPage');
  }

}
