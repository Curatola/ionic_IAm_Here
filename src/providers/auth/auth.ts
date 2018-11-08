import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private API_URL = 'https://reqres.in/api/'
  constructor(
    public http: Http,
    public storage: Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }
  
  userIsLogged() {
    return this.storage.get('token').then(val => {
      if (val !== undefined) {
        return val;
      }
      else {
        return false;
      }
    });
  }
  deslogar() {
    this.storage.remove('token');
    console.log("Me desloguei agora.")
  }
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'login', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}
