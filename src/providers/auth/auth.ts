import { Headers,Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
  private API_URL = 'http://127.0.0.1:5000/login'
  constructor(public http: Http) {
  }
 
  userIsLogged() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }
  deslogar() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token')
  }
  login(email: string, password: string, isPersistent: boolean) {
    return new Promise((resolve, reject) => {
      var header = new Headers();
      header.append('Authorization','Basic '+btoa(email+':'+password));

      this.http.get(this.API_URL,{headers:header})
        .subscribe((result: any) => {
          if(isPersistent){
            localStorage.setItem('token',result.json().token);
          }
          else{
            sessionStorage.setItem('token',result.json().token);
          }
          
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}
