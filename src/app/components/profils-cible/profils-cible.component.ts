import { Component, OnInit } from '@angular/core';
import { ProfilCibleService } from '../../services/profil-cible.service';
import { ProfilCible } from '../../models/profil-cible';

@Component({
  selector: 'app-profils-cible',
  templateUrl: './profils-cible.component.html',
  styleUrls: ['./profils-cible.component.css']
})
export class ProfilsCibleComponent implements OnInit {

  profilsCible: ProfilCible[];

  constructor(
      private profilCibleService: ProfilCibleService
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

  deleteProfilsCible(profilCible: ProfilCible): void{
    this.profilCibleService.deleteProfilCible(profilCible).subscribe((ok)=>{
      
      console.log(ok);
      var index = this.profilsCible.indexOf(profilCible,0);
      if(index > -1){

        this.profilsCible.splice(index, 1);
      }
    });
 
  }
}
