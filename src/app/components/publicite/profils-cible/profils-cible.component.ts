import { Component, OnInit } from '@angular/core';
import { ProfilCibleService } from '../../../services/profil-cible.service';
import { ProfilCible } from '../../../models/profil-cible';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profils-cible',
  templateUrl: './profils-cible.component.html',
  styleUrls: ['./profils-cible.component.css']
})
export class ProfilsCibleComponent implements OnInit {

  profilsCible: ProfilCible[];

  constructor(
      private profilCibleService: ProfilCibleService,
      private toastr: ToastrService
  ) { }

  ngOnInit() {
      this.getProfilsCible();
  }

  getProfilsCible(): void {
    this.profilCibleService.getProfilsCible().subscribe(
      (data) => {
        this.profilsCible = data;
        console.log(this.profilsCible);
      }
    );
  }

  deleteProfilsCible(profilCible: ProfilCible): void {
    this.profilCibleService.deleteProfilCible(profilCible).subscribe((ok) => {

      console.log(ok);
      let index = this.profilsCible.indexOf(profilCible, 0);
      if (index > -1) {

        this.profilsCible.splice(index, 1);
        this.toastr.info('Vous avez supprimé un de vos profil !');
      }
    });
  }
}
