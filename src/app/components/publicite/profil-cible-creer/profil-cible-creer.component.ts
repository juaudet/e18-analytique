import { Component, OnInit } from '@angular/core';
import { ProfilCible } from '../../../models/profil-cible';
import { ProfilCibleService } from '../../../services/profil-cible.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-profil-cible-creer',
  templateUrl: './profil-cible-creer.component.html',
  styleUrls: ['./profil-cible-creer.component.css']
})
export class ProfilCibleCreerComponent implements OnInit {

  profilCible: ProfilCible;

  constructor(
    private profilCibleService: ProfilCibleService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.profilCible = new ProfilCible();
  }

  save(profilCible: ProfilCible) {
    this.profilCibleService.postProfilCible(profilCible).subscribe(
      (data: any) => {
        this.toastr.success("Votre profil a été modifié !")
        this.router.navigate(['/admin/profils-cible']);
        console.log('Submit Profil Cible');
        console.log(this.profilCible.nom);
      },
      (error: any) => {
        this.toastr.error("Votre profil n'a pu être modifié !");
      }
    );
  }

}
