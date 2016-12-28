import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Response} from '@angular/http';
import {HttpClient} from "./http.client";

@Injectable()
export class AuthService {
  private loginIn;

  constructor(private http:HttpClient) {
    this.http = http;
    this.loginIn = localStorage.getItem('auth_token');
  }

  private commentsUrl = 'http://localhost:8742/user/login';

  get authenticated():boolean {
    return this.loginIn;
  }

  login(data:Object):Observable<any> {
    return this.http.post(this.commentsUrl, data)
      .map((res:Response) => res.json())
      .map((res) => {
        localStorage.setItem('auth_token', res.token);
        this.loginIn = true;
        return res;
      })
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  signOut():void {
    localStorage.setItem('auth_token', '');
  }
}
