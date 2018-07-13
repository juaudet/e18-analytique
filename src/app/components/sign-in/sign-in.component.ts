import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Identification} from '../../models/administrateur.model';
import { AdministrateurService } from '../../services/shared/administrateur.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  identification: Identification;

  constructor(
    private administrateurService: AdministrateurService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm();
  }



  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.identification = {
      email: '',
      password: '',
    };
  }

  OnSubmit (form: NgForm) {
    this.administrateurService.identifierAdministrateur(form.value).subscribe(
      (data: any) => {
        this.toastr.success('Connexion effectuée avec succès.');
        console.log(data.access_token);
        localStorage.setItem('token', data.access_token);
        this.router.navigate(["admin"]);
      },
      (error: any) => {
        this.toastr.error("Courriel ou mot de passe invalide.");
      }
    );
  }

}
