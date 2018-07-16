import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNombreVue(): Observable<any>{
    const url = this.rootUrl + '/api/nombreTotalVue';
    return this.http.get(url);
  }

  getProfitTotaux(): Observable<any>{
    const url = this.rootUrl + '/api/montantTotal';
    return this.http.get(url);
  }
}
