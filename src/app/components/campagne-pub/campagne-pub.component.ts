import { Component, OnInit } from '@angular/core';

import { CampagnePublicitaireService } from '../../services/campagne-publicitaire.service';
import { CampagnePublicitaire } from '../../models/campagne-publicitaire';

@Component({
  selector: 'app-campagne-pub',
  templateUrl: './campagne-pub.component.html',
  styleUrls: ['./campagne-pub.component.css']
})
export class CampagnePubComponent implements OnInit {

  campagnesPublicitaires: CampagnePublicitaire[];

  constructor(
  	private campagnePublicitaireService: CampagnePublicitaireService
  ) { }

  ngOnInit() {
  	this.getCampagnesPublicitaires();
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

}
