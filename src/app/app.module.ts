import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';
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
<<<<<<< HEAD
=======
import { PresencaListasProvider } from '../providers/presenca-listas/presenca-listas';
import { PresencaAlunosProvider } from '../providers/presenca-alunos/presenca-alunos';
import { TurmasListaProvider } from '../providers/turmas-lista/turmas-lista';
>>>>>>> 969cd8d60ef0e569aa152dff6bbe494cb18cf828

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ name: 'mydb'}),
    ListasPageModule,
    TurmasPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TurmasPage,
    ListasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
=======
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    PresencaListasProvider,
    PresencaAlunosProvider,
    TurmasListaProvider
>>>>>>> 969cd8d60ef0e569aa152dff6bbe494cb18cf828
  ]
})
export class AppModule {}
