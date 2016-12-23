import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';


@Injectable()
export class AuthService {
  private loginIn = false;

  constructor(private http:Http) {
    //this.loginIn = localStorageService.get('auth_token');
  }

  private commentsUrl = 'http://localhost:8742/user/login';

  get authenticated():boolean {
    console.log('get auth');
    return this.loginIn;
  }

  get id():string {
    return '';
  }

  login(data:Object):Observable<any> {
    return this.http.post(this.commentsUrl, data)
      .map((res:Response) => res.json())
      .map((res) => {
        localStorage.setItem('token', res.token);
        this.loginIn = true;
        return res;
      })
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  isLogin() {

  }

  signIn(email:string, password:string) {
    console.log(email, password);
  }

  signOut():void {

  }
}
