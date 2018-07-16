import { Component, OnInit } from '@angular/core';
import {FormArray} from '@angular/forms';
import {ProfilCible} from '../../../models/profil-cible';
import {CampagnePublicitaire} from '../../../models/campagne-publicitaire';
import {ProfilCibleService} from '../../../services/profil-cible.service';
import {CampagnePublicitaireService} from '../../../services/campagne-publicitaire.service';

@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord-pub.component.html',
  styleUrls: ['./tableau-bord-pub.component.css']
})
export class TableauBordPubComponent implements OnInit {

  profilCible: ProfilCible[];
  campagnesPublicitaires: CampagnePublicitaire[];

  constructor(private profilCibleService: ProfilCibleService,
              private campagnePublicitaireService: CampagnePublicitaireService) { }

  ngOnInit() {
    this.getCampagnesPublicitaires();
    this.getProfilCible();
  }

  getCampagnesPublicitaires(): void {
    this.campagnePublicitaireService.getCampagnesPublicitaires().subscribe(
      campagnesPublicitaires => {
        this.campagnesPublicitaires = campagnesPublicitaires;
      },
      error => {
        console.log(error);
      });
  }

  getProfilCible(): void {
    this.profilCibleService.getProfilsCible().subscribe(
      profilCible => {
        this.profilCible = profilCible;
      }
    );
  }
}
