import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Redevances} from '../models/redevances';
import {Observable} from 'rxjs';
import {CompteBancaire} from '../models/compteBancaire';

@Injectable({
  providedIn: 'root'
})
export class CompteBancaireService {

  readonly rootUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  postCompteBancaire(noCompte: CompteBancaire): Observable<any> {
    const url = this.rootUrl + '/api/redevances';
    return this.http.post<Redevances>(url, noCompte);
  }
}
