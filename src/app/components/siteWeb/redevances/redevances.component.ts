import { Component, OnInit } from '@angular/core';
import { Redevances} from '../../../models/redevances';
import { RedevancesService } from '../../../services/redevances.service';
import { ToastrService} from 'ngx-toastr';
import {CompteBancaire} from '../../../models/compteBancaire';

@Component({
  selector: 'app-redevances',
  templateUrl: './redevances.component.html',
  styleUrls: ['./redevances.component.css']
})
export class RedevancesComponent implements OnInit {

  redevances: Redevances;
  compteBancaire: CompteBancaire;
  noCompte: string;


  constructor(private redevancesService: RedevancesService, private toastr: ToastrService) { }

  ngOnInit() {
     this.getRedevances();
  }

   getRedevances(): void {
     this.redevancesService.getRedevances().subscribe(
      (data) => {
        this.redevances = data;
         console.log(this.redevances);
       },
     ); }

   reclamerRedevances(redevances: Redevances): void {
     this.redevancesService.postRedevances(redevances).subscribe(
       (data) => {
         this.toastr.success('Votre argent à été déposé dans votre compte');

       }
     ); }

   noCompteBancaire(): void {
    this.noCompte = this.compteBancaire.noCompte;
    this.redevancesService.postCompteBancaire(this.compteBancaire).subscribe(
      (data) => {}
      );
    }
}

