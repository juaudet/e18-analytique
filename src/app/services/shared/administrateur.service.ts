import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from '@angular/http';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import { Administrateur, Identification } from '../../models/administrateur.model';
import { environment } from '../../../environments/environment';

@Injectable()
  export class AdministrateurService {
    readonly rootUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    enregistrerAdministrateur(administrateur: Administrateur) {
      const body: Administrateur = {
        nom: administrateur.nom,
        password: administrateur.password,
        confirmationPassword: administrateur.confirmationPassword,
        email: administrateur.email,
        prenom: administrateur.prenom,
        rue: administrateur.rue,
        ville: administrateur.ville,
        code_postal: administrateur.code_postal,
        no_civique: administrateur.no_civique,
        type: administrateur.type,
        no_compte_bancaire: administrateur.no_compte_bancaire,
        url: administrateur.url,
      }
      return this.http.post(this.rootUrl + '/api/Administrateur/Enregistrer', body);
    }

    identifierAdministrateur(identification: Identification) {
    const body = {
        email: identification.email,
        password: identification.password,
      }
    return this.http.post(this.rootUrl + '/api/auth/login', body);
    }

  nomRoleAdministrateur() {

    return this.http.get(this.rootUrl + '/api/auth/me');
    }
  }
