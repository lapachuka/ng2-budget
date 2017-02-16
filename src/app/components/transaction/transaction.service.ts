import {Injectable} from "@angular/core";
import {HttpClient} from "../../shared/services/http.client";
import {Observable} from 'rxjs/Rx';
import {Response} from '@angular/http';

@Injectable()
export class TransactionService {
  transactionUrl = 'http://localhost:8742';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getIncomeList(month, year, type) {
    let tranUrl = '/transactions?year=' + year + '&month=' + month;

    if (type == 'income' || type === 'expenses') {
      tranUrl += '&type=' + type;
    }

    return this.http.get(this.transactionUrl + tranUrl)
      .map((res: Response) => {
        let resp = res.json();

        resp.data.sort(this.sortResByDate);

        return resp;
      })
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));

  }

  sortResByDate(a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  }

}
