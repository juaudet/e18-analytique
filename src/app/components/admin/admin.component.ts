import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from '../../services/shared/administrateur.service';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  nom: string;
  email: string;
  role: string;
  navigationSubscription;

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

    // https://medium.com/engineering-on-the-incline/reloading-current-route-on-click-angular-5-1a1bfc740ab2
    this.navigationSubscription = this._router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
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
