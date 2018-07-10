import { Component, OnInit } from '@angular/core';
import { CampagnePublicitaireService } from '../../../services/campagne-publicitaire.service';
import { CampagnePublicitaire } from '../../../models/campagne-publicitaire';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-campagne-pub',
  templateUrl: './campagne-pub.component.html',
  styleUrls: ['./campagne-pub.component.css']
})
export class CampagnePubComponent implements OnInit {

  campagnesPublicitaires: CampagnePublicitaire[];

  constructor(
    private campagnePublicitaireService: CampagnePublicitaireService,
    private toastr: ToastrService
  ) {
  }

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

  deleteCampagnePubblicitaire(campagnePublicitaire: CampagnePublicitaire): void {

    if (window.confirm("Ëtes-vous sur de vouloir supprimer cette campagne?")) {
      this.campagnePublicitaireService.deleteCampagnesPublicitaires(campagnePublicitaire).subscribe((ok) => {

        console.log(ok);

        let index = this.campagnesPublicitaires.indexOf(campagnePublicitaire, 0);
        if (index > -1) {

          this.campagnesPublicitaires.splice(index, 1);
          this.toastr.info('Vous avez supprimé une de vos campagnes publicitaire !');
        }
      });
    }
  }
}
