import { Headers,Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {
  private API_URL = 'http://127.0.0.1:5000/login'
  constructor(
    public http: Http,
    public storage: Storage
  ) {
    console.log('Hello AuthProvider Provider');
  }
 
  async userIsLogged() {
    let val = await this.storage.get('token')
    
    if (val !== undefined) {
      return val;
    }
    else {
      return false;
    }
  }
  deslogar() {
    this.storage.remove('token');
    console.log("Me desloguei agora.")
  }
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var header = new Headers();
      header.append('Authorization','Basic '+btoa(email+':'+password));
       console.log(header);

      this.http.get(this.API_URL,{headers:header})
        .subscribe((result: any) => {
          this.storage.set('token',result.json().token)
          
          resolve(result.json());
        },
          (error) => {
            reject(error.json());
          });
    });
  }
}
