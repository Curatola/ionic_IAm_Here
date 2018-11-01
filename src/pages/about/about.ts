import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  usuario: string = "Olá Olavo"
  constructor(public navCtrl: NavController) {

  }

}
