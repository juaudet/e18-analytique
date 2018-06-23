import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from '@angular/http';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import { Administrateur, Identification } from './administrateur.model';

@Injectable()
  export class AdministrateurService {
    readonly rootUrl = 'http://127.0.0.1:8000';
    constructor(private http: HttpClient) { }

    enregistrerAdministrateur(administrateur: Administrateur) {
      const body: Administrateur = {
        NomUtilisateur: administrateur.NomUtilisateur,
        MotDePasse: administrateur.MotDePasse,
        ConfirmationMotDePasse: administrateur.ConfirmationMotDePasse,
        Courriel: administrateur.Courriel,
        Nom: administrateur.Nom,
        Prenom: administrateur.Prenom,
        Adress: administrateur.Adress,
        Ville: administrateur.Ville
      }
      return this.http.post(this.rootUrl + '/api/Administrateur/Enregistrer', body);
    }

    identifierAdministrateur(identification: Identification) {
    const body: Identification = {
        email: identification.Courriel,
        password: identification.MotDePasse,
      }
    return this.http.post(this.rootUrl + '/api/auth/login', body);
    }
  }
