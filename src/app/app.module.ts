import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { ListasPageModule } from '../pages/listas/listas.module';
import { ListasPage } from '../pages/listas/listas';
import { TurmasPage } from '../pages/turmas/turmas';
import { TurmasPageModule } from '../pages/turmas/turmas.module';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ name: '_mydb'}),
    ListasPageModule,
    TurmasPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TurmasPage,
    ListasPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
