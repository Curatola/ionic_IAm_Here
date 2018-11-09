import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { ListasPageModule } from '../pages/listasPresenca/listasPresenca.module';
import { ListasPresencaPage } from '../pages/listasPresenca/listasPresenca';
import { TurmasPage } from '../pages/turmas/turmas';
import { TurmasPageModule } from '../pages/turmas/turmas.module';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { TurmasProvider } from '../providers/turmas/turmas';
import { PresencaListasProvider } from '../providers/presenca-listas/presenca-listas';
import { PresencaAlunosProvider } from '../providers/presenca-alunos/presenca-alunos';
import { TurmasListaProvider } from '../providers/turmas-lista/turmas-lista';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ name: '_mydb' }),
    ListasPageModule,
    TurmasPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TurmasPage,
    ListasPresencaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    TurmasProvider,
    PresencaListasProvider,
    PresencaAlunosProvider,
    TurmasListaProvider
  ]
})
export class AppModule { }
