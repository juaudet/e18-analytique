import { Component, OnInit } from '@angular/core';
import { Administrateur } from '../../models/administrateur.model';
import {  NgForm } from '@angular/forms';
import { AdministrateurService } from '../../services/shared/administrateur.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  administrateur: Administrateur;
  paternDuCourriel = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private administrateurService: AdministrateurService,
              private toastr: ToastrService,
              private router: Router, ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
        form.reset();
    }

    this.administrateur = {
      password: '',
      confirmationPassword: '',
      email: '',
      nom: '',
      no_civique: '',
      ville: '',
      code_postal: '',
      rue: '',
      type: '',
      no_compte_bancaire: '',
      url: '',

    };
  }

  OnSubmit (form: NgForm) {

    if (this.administrateur.password !== this.administrateur.confirmationPassword) {
      this.toastr.error('Les mots de passe ne sont pas identiques');
    } else {
      this.administrateurService.enregistrerAdministrateur(form.value).subscribe(
        (data: any) => {
          this.toastr.success('Enregistrement effectuée avec succès.');
          this.resetForm(form);
          this.router.navigate(['login']);
        },
        (error: any) => {
          this.toastr.error('Vos champs sont invalide !');
        }
      );
    }
  }

  public UpdateForm(formName: string) {

    if (formName == 'publicite') {

    document.getElementById('noCompte').hidden = true;
    (<HTMLInputElement>document.getElementById('noCompte')).value = '';

     document.getElementById('urlSite').hidden = true;
     (<HTMLInputElement>document.getElementById('urlSite')).value = '';

    } else if (formName == 'site') {

      document.getElementById('noCompte').hidden = false;
      document.getElementById('urlSite').hidden = false;

    }

  }
}
