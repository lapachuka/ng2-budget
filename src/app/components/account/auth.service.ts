import {Injectable} from '@angular/core';
import {Observable, Subject, ReplaySubject, BehaviorSubject} from 'rxjs/Rx';
import {Response} from '@angular/http';
import {HttpClient} from "../../shared/services/http.client";

@Injectable()
export class AuthService {
  private loginIn;

  testAuth: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.http = http;
    this.loginIn = localStorage.getItem('auth_token');
    console.log(!!this.loginIn);
    this.testAuth = new BehaviorSubject(!!this.loginIn);

    this.testAuth.subscribe((auth) => {
      console.log('auth service', auth);
    })
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
        console.log('login : true');
        this.testAuth.next(this.loginIn);
        return res;
      })
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  signOut(): void {
    localStorage.setItem('auth_token', '');
    this.loginIn = false;
    this.testAuth.next(this.loginIn);
  }

  isAuth(): Observable<any> {
    return this.testAuth.asObservable();
  }
}
