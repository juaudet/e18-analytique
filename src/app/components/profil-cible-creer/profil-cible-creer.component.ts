import { Component, OnInit } from '@angular/core';
import { ProfilCible } from '../../models/profil-cible';
import { ProfilCibleService } from '../../services/profil-cible.service';

@Component({
  selector: 'app-user-profil-form',
  templateUrl: './profil-cible-creer.component.html',
  styleUrls: ['./profil-cible-creer.component.css']
})
export class UserProfilFormComponent implements OnInit {

  profilCible: ProfilCible;

  constructor(
    private profilCibleService: ProfilCibleService
  ) { }

  ngOnInit() {
    this.profilCible = new ProfilCible();
  }

  OnSubmit() {
    this.profilCibleService.postProfilCible(this.profilCible).subscribe(
      (data: any) => {
        console.log('Submit Profil Cible');
      }
    );
  }

}
