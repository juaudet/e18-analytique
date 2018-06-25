import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilCible } from './profil-cible';
import { environment } from '../environments/environment';

const httpOptions = {
  	headers: new HttpHeaders({
  		'Authorization' : 'Bearer ' + localStorage.getItem('token'),
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	})
};

@Injectable({
  providedIn: 'root'
})
export class ProfilCibleService {

   	readonly rootUrl = environment.apiUrl;
    
    constructor(private http: HttpClient) { }
    
    getProfilsCible(): Observable<ProfilCible[]> {
    	const url = this.rootUrl + '/api/profils';
        return this.http.get<ProfilCible[]>(url, httpOptions);
    }

}