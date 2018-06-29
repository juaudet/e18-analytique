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
      console.log(administrateur);
      return this.http.post<Administrateur>(this.rootUrl + '/api/register', administrateur);
    }

    identifierAdministrateur(identification: Identification) {
      return this.http.post<Identification>(this.rootUrl + '/api/auth/login', identification);
    }

  nomRoleAdministrateur() {

    return this.http.get(this.rootUrl + '/api/auth/me');
    }
  }
