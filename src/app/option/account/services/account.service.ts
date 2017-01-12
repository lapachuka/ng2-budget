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
  private currencyUrl:string = 'http://localhost:8742/currency';

  getList():Observable<any> {
    return this.http.get(this.accountUrl)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  getCurrencyList():Observable<any> {
    return this.http.get(this.currencyUrl)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  createNewAccount(data:Object):Observable<any> {
    return this.http.post(this.accountUrl, data)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  updateAccount(id: number, data:Object):Observable<any> {
    return this.http.put(`${this.accountUrl}/${id}`, data)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  removeAccountById(id: number):Observable<any> {
    return this.http.delete(`${this.accountUrl}/${id}`)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }
}
