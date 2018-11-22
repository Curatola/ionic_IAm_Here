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
  credential: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private authProvider: AuthProvider) {
    this.credential = new User();
    this.credential.email = 'leds_serra@gmail.com';
    this.credential.password = 'leds123';
    this.credential.storage = null;
    this.islogged();
  }
  async islogged() {
    var logged=await this.authProvider.userIsLogged();
    this.toast.create({ message: 'UserLogged: ' + logged, position: 'botton', duration: 3000 }).present();
  }
  login() {
    this.authProvider.login(this.credential.email, this.credential.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
        this.credential.storage = result.token;
        this.navCtrl.setRoot(TurmasPage);

        //Salvar o token no Ionic Storage para usar em futuras requisições.

        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
export class User {
  email: string;
  password: string;
  storage: Storage;
}