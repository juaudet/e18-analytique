import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilCible } from '../models/profil-cible';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilCibleService {

   	readonly rootUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getProfilsCible(): Observable<ProfilCible[]> {
    	const url = this.rootUrl + '/api/profils';
        return this.http.get<ProfilCible[]>(url);
    }

    postProfilCible(profilCible: ProfilCible): Observable<any> {
    	const url = this.rootUrl + '/api/profils';
    	return this.http.post<ProfilCible>(url, profilCible);
    }

    getProfilCible(id: number): Observable<ProfilCible> {
        const url = `${this.rootUrl}/api/profils/${id}`;
        return this.http.get<ProfilCible>(url);
    }

    patchProfilCible(profilCible: ProfilCible):Observable<ProfilCible> {
        const url = `${this.rootUrl}/api/profils/${profilCible.id}`;
        return this.http.patch<ProfilCible>(url, profilCible);
    }
    
    deleteProfilCible(profilCible: ProfilCible):Observable<ProfilCible> {
        const url = `${this.rootUrl}/api/profils/${profilCible.id}`;
        return this.http.delete<ProfilCible>(url);
    }

}
