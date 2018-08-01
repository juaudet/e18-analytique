import { Component, OnInit } from '@angular/core';
import { Redevances} from '../../../models/redevances';
import { RedevancesService } from '../../../services/redevances.service';
import { ToastrService} from 'ngx-toastr';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-redevances',
  templateUrl: './redevances.component.html',
  styleUrls: ['./redevances.component.css']
})
export class RedevancesComponent implements OnInit {


  redevance: number;
  no_compte_bancaire: string;


  constructor(private redevancesService: RedevancesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getRedevances();
  }

   getRedevances(): void {
     this.redevancesService.getRedevances().subscribe(
      (data) => {
        this.redevance = data;
        console.log(this.redevance);
       },
     );
  }

   reclamerRedevances(no_compte_bancaire: string): void {
     
    if(no_compte_bancaire != null){
    this.redevancesService.patchRedevances(no_compte_bancaire).subscribe(
       (data: any) => {
         this.toastr.success('Votre argent à été déposé dans votre compte');
         console.log(data);
       },
      (error: any) => {
        if(error.status == 400){
          this.toastr.error('Vous avez inscrit un faux numéro de compte ! Fraudeur !');
          console.log(error.status);
        }else{
          this.toastr.error('Problème serveur, revenez plus-tard ! ');
          console.log(error.status);
        }
      }
     );
     console.log(this.no_compte_bancaire);
    }else{
      this.toastr.error("Vous n'avez inscrit aucun numéro de banque !")
    }
  }



}

