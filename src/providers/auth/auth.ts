import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient, 
    public storage:Storage
    ) {
    console.log('Hello AuthProvider Provider');
  }
  logar(){
    console.log("Me loguei agora.")
  }
  userIsLogged(){
    return this.storage.get('token').then(val => {
      if(val !== undefined){
        return val;
      }
      else{
        return false;
      }
    });
  }
  deslogar(){
    this.storage.remove('token');
    console.log("Me desloguei agora.")
  }
}
