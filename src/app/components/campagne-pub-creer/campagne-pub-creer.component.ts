import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CampagnePublicitaireService } from '../../services/campagne-publicitaire.service';
import { CampagnePublicitaire } from '../../models/campagne-publicitaire';

@Component({
  selector: 'app-campagne-pub-creer',
  templateUrl: './campagne-pub-creer.component.html',
  styleUrls: ['./campagne-pub-creer.component.css']
})
export class CampagnePubCreerComponent implements OnInit {
campagnePublicitaire: CampagnePublicitaire;

  constructor(private campagnePublicitaireService: CampagnePublicitaireService, 
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
        form.reset();
    }
  

    this.campagnePublicitaire = {
      nom: '',
      date_debut: '',
      date_fin: '',
      budget: null,
      active: false,

    }
  }

    OnSubmit (form: NgForm) {

      this.campagnePublicitaireService.creerCampagnePublicitaire(form.value).subscribe(
        (data: any) =>{
          this.toastr.success('Campagne enregistrée avec succès.');
          this.resetForm(form);
          this.router.navigate(['campagnes']);
        },
        (error: any) => {
          this.toastr.error("Vos champs sont invalide !");
        }
      );
    }

}

