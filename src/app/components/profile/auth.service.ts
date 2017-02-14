import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import {Response} from '@angular/http';
import {HttpClient} from "../../shared/services/http.client";

@Injectable()
export class AuthService {
  private loginIn;

  authFree: BehaviorSubject<boolean>;
  authRestricted: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.http = http;
    this.loginIn = localStorage.getItem('auth_token');

    this.authFree = new BehaviorSubject(!this.loginIn);
    this.authRestricted = new BehaviorSubject(!!this.loginIn);

    this.nextAuth(this.loginIn);
  }

  private commentsUrl = 'http://localhost:8742/user/login';

  get authenticated(): boolean {
    return this.loginIn;
  }

  login(data: Object): Observable<any> {
    return this.http.post(this.commentsUrl, data)
      .map((res: Response) => res.json())
      .map((res) => {
        localStorage.setItem('auth_token', res.token);
        this.loginIn = true;

        this.nextAuth(this.loginIn);

        return res;
      })
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  nextAuth(loginIn){
    this.authRestricted.next(loginIn);
    this.authFree.next(!loginIn);
  }

  signOut(): void {
    localStorage.setItem('auth_token', '');
    this.loginIn = false;
    this.nextAuth(this.loginIn);
  }

  isAuth(): Observable<any> {
    return this.authRestricted;
  }

  isAuthNot(): Observable<any> {
    return this.authFree;
  }
}
