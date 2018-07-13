import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { PageWeb } from '../models/page-web';


@Injectable({
  providedIn: 'root'
})
export class PageWebService {

  readonly rootUrl = environment.apiUrl + '/api/pages-web';

  constructor(private http: HttpClient) { }

  getHistorique(): Observable<PageWeb[]> {
    const url = this.rootUrl;
    return this.http.get<PageWeb[]>(url);
  }
}
