import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { CampagnePublicitaire } from '../models/campagne-publicitaire';
import {ProfilCible} from '../models/profil-cible';

@Injectable({
  providedIn: 'root'
})
export class CampagnePublicitaireService {

  readonly rootUrl = environment.apiUrl + '/api/campagnes-publicitaires';

  constructor(
    private http: HttpClient
  ) { }

  getCampagnesPublicitaires(): Observable<CampagnePublicitaire[]> {
    const url = this.rootUrl;
    return this.http.get<CampagnePublicitaire[]>(url);
  }

  postCampagnesPublicitaires(campagnesPublicitaire: CampagnePublicitaire): Observable <any> {
    const url = this.rootUrl;
    return this.http.post<CampagnePublicitaire>(url, campagnesPublicitaire);
  }

}
