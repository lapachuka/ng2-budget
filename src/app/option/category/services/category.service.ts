import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Response} from '@angular/http';
import {HttpClient} from "../../../auth/services/http.client";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
  private categoryUrl:string = 'http://localhost:8742/categories';

  getList(queryParam: string):Observable<any> {
    return this.http.get(`${this.categoryUrl}?type=${queryParam}`)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  createCategory(data:Object, queryParam: string):Observable<any> {
    return this.http.post(`${this.categoryUrl}?type=${queryParam}`, data)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  deleteCategoryById(id: number, queryParam: string):Observable<any> {
    return this.http.delete(`${this.categoryUrl}/${id}?type=${queryParam}`)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  updateCategoryById(id: number, data:Object, queryParam: string):Observable<any> {
    return this.http.put(`${this.categoryUrl}/${id}?type=${queryParam}`, data)
      .map((res:Response) => res.json())
      .map(res => res)
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }
}
