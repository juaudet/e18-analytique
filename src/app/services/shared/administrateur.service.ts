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
<<<<<<< HEAD
      return this.http.post<Administrateur>(this.rootUrl + '/api/Administrateur/Enregistrer', administrateur);
=======
      const body: Administrateur = {
        nom: administrateur.nom,
        password: administrateur.password,
        confirmationPassword: administrateur.confirmationPassword,
        email: administrateur.email,
        rue: administrateur.rue,
        ville: administrateur.ville,
        code_postal: administrateur.code_postal,
        no_civique: administrateur.no_civique,
        type: administrateur.type,
        no_compte_bancaire: administrateur.no_compte_bancaire,
        url: administrateur.url,
      }
      return this.http.post(this.rootUrl + '/api/Administrateur/Enregistrer', body);
>>>>>>> 5d03756b3761da4456f23f05f94ecada4e128dae
    }

    identifierAdministrateur(identification: Identification) {
    return this.http.post<Identification>(this.rootUrl + '/api/auth/login', identification);
    }

  nomRoleAdministrateur() {

    return this.http.get(this.rootUrl + '/api/auth/me');
    }
  }
