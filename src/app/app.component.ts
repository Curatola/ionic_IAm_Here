import { AuthProvider } from './../providers/auth/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TurmasPage } from '../pages/turmas/turmas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  //pages: Array<{title: string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var logged = this.auth.userIsLogged();
      if (logged){
        this.rootPage=TurmasPage;
      }
      else{
        this.rootPage=LoginPage;
      }
    });
  }
}
