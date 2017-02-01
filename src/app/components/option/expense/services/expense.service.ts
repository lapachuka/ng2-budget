import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Response} from '@angular/http';
import {HttpClient} from "../../../../shared/services/http.client";

@Injectable()
export class ExpenseService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
  private expenseQueryParam: string = 'type=expenses';
  private categoryUrl:string = 'http://localhost:8742/categories';
  private expenseUrl:string = `${this.categoryUrl}?${this.expenseQueryParam}`;

  getList():Observable<any> {
    return this.http.get(this.expenseUrl)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  createExpense(data:Object):Observable<any> {
    return this.http.post(this.expenseUrl, data)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  deleteExpenseById(id: number):Observable<any> {
    return this.http.delete(`${this.categoryUrl}/${id}?${this.expenseQueryParam}`)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  updateExpenseById(id: number, data:Object):Observable<any> {
    return this.http.put(`${this.categoryUrl}/${id}?${this.expenseQueryParam}`, data)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }
}
