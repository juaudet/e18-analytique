import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Identification} from '../shared/administrateur.model';
import { AdministrateurService } from '../shared/administrateur.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  identification: Identification;

  constructor(private administrateurService: AdministrateurService, private toastr: ToastrService) { }

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
        console.log(data);
      },
      (error: any) => {
        this.toastr.error("Courriel ou mot de passe invalide.");
      }
    );
  }

}
