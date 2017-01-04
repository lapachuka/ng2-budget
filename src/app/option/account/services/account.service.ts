import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Response} from '@angular/http';
import {HttpClient} from "../../../auth/services/http.client";

@Injectable()
export class AccountService {

  constructor(private http:HttpClient) {
    this.http = http;
  }

  private accountUrl:string = 'http://localhost:8742/accounts';

  getList():Observable<any> {
    return this.http.get(this.accountUrl)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }
}
