import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from '../../services/shared/administrateur.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  nom: string;
  courriel: string;

  constructor( private nomRoleService: AdministrateurService) { }

  ngOnInit() {
    this.nomRoleService.nomRoleAdministrateur().subscribe(
      (data: any) => {
       this.nom = data.nom;
       this.courriel = data.email;
      },
    );
  }

}
