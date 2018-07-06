import { Component, OnInit } from '@angular/core';
import { CampagnePublicitaireService} from '../../services/campagne-publicitaire.service';
import { CampagnePublicitaire } from '../../models/campagne-publicitaire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campagne-pub-creer',
  templateUrl: './campagne-pub-creer.component.html',
  styleUrls: ['./campagne-pub-creer.component.css']
})
export class CampagnePubCreerComponent implements OnInit {

  campagnePublicitaire: CampagnePublicitaire;

  constructor(private  campagnePubService: CampagnePublicitaireService,
              private  router: Router) { }

  ngOnInit() {
    this.campagnePublicitaire = new CampagnePublicitaire();
  }

  save (campagnePublicitaire: CampagnePublicitaire) {
    this.campagnePubService.postCampagnesPublicitaires(campagnePublicitaire).subscribe(
      (data: any) => {
        this.router.navigate(['/admin/campagne-pub']);
        console.log('Submit Campagne Publicitaire');
        console.log(this.campagnePublicitaire.nom);
      }
    );
  }
}
