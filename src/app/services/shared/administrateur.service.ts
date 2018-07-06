import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from '@angular/http';
import {Observable} from 'rxjs';

import { Administrateur, Identification } from '../../models/administrateur.model';
import { environment } from '../../../environments/environment';

@Injectable()
  export class AdministrateurService {
    readonly rootUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    enregistrerAdministrateur(administrateur: Administrateur) {
      return this.http.post<Administrateur>(this.rootUrl + '/api/register', administrateur);
    }

    identifierAdministrateur(identification: Identification) {
      return this.http.post<Identification>(this.rootUrl + '/api/auth/login', identification);
    }

    nomRoleAdministrateur() {
      return this.http.get(this.rootUrl + '/api/auth/me');
    }

    logoutAdministrateur(email: string){
      return this.http.post(this.rootUrl + '/api/auth/logout', email );
    }

    loggedIn() {
      return !!localStorage.getItem('token');
    }
    
  }
