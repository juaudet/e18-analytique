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
  email: string;
  role: string;

  constructor( private administrateurService: AdministrateurService,
     private _router: Router,
     private toastr: ToastrService) { }

  ngOnInit() {
    this.administrateurService.nomRoleAdministrateur().subscribe(
      (data: any) => {
       this.nom = data.nom;
       this.email = data.email;
       this.role = data.role;

        if (this.role === "site") {
          document.getElementById("profilSideBar").hidden = true;
        }
        if (this.role === "site") {
          document.getElementById("profilSideBar1").hidden = true;
        }
        if (this.role === "site") {
          document.getElementById("profilSideBar2").hidden = true;
        }
        if (this.role !== "site") {
          document.getElementById("profilSideBar3").hidden = true;
        }
        if (this.role !== "site") {
          document.getElementById("profilSideBar4").hidden = true;
        }
        if (this.role !== "site") {
          document.getElementById("profilSideBar5").hidden = true;
        }
        if (this.role !== "site") {
          document.getElementById("profilSideBar6").hidden = true;
        }
        if (this.role !== "site") {
          document.getElementById("profilSideBar7").hidden = true;
        }
      },
    );
  }

  logoutAdministrateur(){
    this.administrateurService.logoutAdministrateur(this.email).subscribe(
      (data: any) => {
        this.toastr.success('Vous êtes déconnecté !');
      },
    );
    localStorage.clear();
    this._router.navigate(['login']);
  }

}
