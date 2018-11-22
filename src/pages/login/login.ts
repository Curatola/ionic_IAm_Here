import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { TurmasPage } from '../turmas/turmas';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  remember: boolean;

  credential: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private authProvider: AuthProvider) {
    this.credential = new User();
    this.credential.email = 'leds_serra@gmail.com';
    this.credential.password = 'leds123';
  }

  login() {
    this.authProvider.login(this.credential.email, this.credential.password, this.remember)
      .then((result: any) => {
        this.navCtrl.setRoot(TurmasPage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

}
export class User {
  email: string;
  password: string;
}