import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redevances} from '../models/redevances';
import { environment } from '../../environments/environment';
import {ProfilCible} from '../models/profil-cible';
import {CompteBancaire} from '../models/compteBancaire';

@Injectable({
  providedIn: 'root'
})
export class RedevancesService {

  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRedevances(): Observable<any>{
    const url = this.rootUrl + '/api/redevances';
    return this.http.get<Redevances>(url);
  }

  getRedevancesId(id: number): Observable<any> {
    const url = `${this.rootUrl}/api/redevances/${id}`;
    return this.http.get<Redevances>(url);
  }

  postCompteBancaire(noCompte: CompteBancaire): Observable<any> {
    const url = this.rootUrl + '/api/redevances';
    return this.http.post<Redevances>(url, noCompte);
  }

  patchRedevances(redevances: Redevances): Observable<any> {
    const url = this.rootUrl + '/api/redevances';
    return this.http.patch<Redevances>(url, redevances);
  }
}
