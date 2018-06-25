import { Component, OnInit } from '@angular/core';
import {Administrateur} from '../../models/administrateur.model';
import { NgForm } from '@angular/forms';
import { AdministrateurService } from '../../services/shared/administrateur.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  administrateur: Administrateur;
  paternDuCourriel = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private administrateurService: AdministrateurService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
        form.reset();
    }
    this.administrateur = {
      NomUtilisateur: '',
      MotDePasse: '',
      ConfirmationMotDePasse: '',
      Courriel: '',
      Nom: '',
      Prenom: '',
      Adress: '',
      Ville: ''
    };
  }

  OnSubmit (form: NgForm) {
    this.administrateurService.enregistrerAdministrateur(form.value).subscribe((data: any) => {
      if (data.Succeeded === true) {
        this.resetForm(form);
        this.toastr.success('Enregistrement réussit');
      } else {
        this.toastr.error(data.Errors[0]);
      }
    });
  }
}
