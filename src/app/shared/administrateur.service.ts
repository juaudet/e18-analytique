import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from '@angular/http';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import { Administrateur, Identification } from './administrateur.model';

@Injectable()
  export class AdministrateurService {
    readonly rootUrl = 'http://localhost:35257';
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
        Courriel: identification.Courriel,
        MotDePasse: identification.MotDePasse,
      }
    return this.http.post(this.rootUrl + '/api/Administrateur/Identification', body);
    }
  }
