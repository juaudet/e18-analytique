import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProfilCible } from '../../models/profil-cible';
import { ProfilCibleService } from '../../services/profil-cible.service';

@Component({
  selector: 'app-profil-cible-editer',
  templateUrl: './profil-cible-editer.component.html',
  styleUrls: ['./profil-cible-editer.component.css']
})
export class ProfilCibleEditerComponent implements OnInit {

	profilCible: ProfilCible;

  	constructor(
	    private profilCibleService: ProfilCibleService,
	    private router: Router,
	    private route: ActivatedRoute,
	) { }

    ngOnInit() {
    	this.getProfilCible();
    }

    getProfilCible(): void {
    	const id = +this.route.snapshot.paramMap.get('id');
  		this.profilCibleService.getProfilCible(id)
    		.subscribe(profilCible => this.profilCible = profilCible);
    }

}
