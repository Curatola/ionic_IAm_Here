import { AuthProvider } from './../auth/auth';
import { Headers,Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {
  private API_URL = 'http://127.0.0.1:5000/'
  constructor(public http: Http, public auth: AuthProvider) {
  }
  async get(rota: string) {
    var token = this.auth.userIsLogged();
    if (!token) return false;

    var header = new Headers();
    header.append('Authorization', 'Bearer ' + token);
    var result = await this.http.get(this.API_URL+rota,{headers:header}).toPromise()

    return result.json()
  }
}
