import { Component, OnInit } from '@angular/core';
import { ProfilCible } from '../../models/profil-cible';
import { ProfilCibleService } from '../../services/profil-cible.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-cible-creer',
  templateUrl: './profil-cible-creer.component.html',
  styleUrls: ['./profil-cible-creer.component.css']
})
export class ProfilCibleCreerComponent implements OnInit {

  profilCible: ProfilCible;

  constructor(
    private profilCibleService: ProfilCibleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.profilCible = new ProfilCible();
  }

  save() {
    this.profilCibleService.postProfilCible(this.profilCible).subscribe(
      (data: any) => {
        this.router.navigate(['/admin/profils-cible']);
        console.log('Submit Profil Cible');
        console.log(this.profilCible.nom);
      }
    );
  }

}
