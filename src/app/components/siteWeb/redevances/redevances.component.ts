import { Component, OnInit } from '@angular/core';
import { Redevances} from '../../../models/redevances';
import { RedevancesService } from '../../../services/redevances.service';
import { ToastrService } from 'ngx-toastr';
import { CompteBancaire } from '../../../models/compte-bancaire';

@Component({
  selector: 'app-redevances',
  templateUrl: './redevances.component.html',
  styleUrls: ['./redevances.component.css']
})
export class RedevancesComponent implements OnInit {


  redevance_to_pay: number;
  no_compte_bancaire: CompteBancaire;


  constructor(private redevancesService: RedevancesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getRedevances();
  }

   getRedevances(): void {
     this.redevancesService.getRedevances().subscribe(
      (data) => {
        this.redevance_to_pay = data['redevance_to_pay'];
        console.log(this.redevance_to_pay);
       },
     );
  }

   reclamerRedevances(no_compte_bancaire: CompteBancaire): void {
    this.redevancesService.patchRedevances(no_compte_bancaire).subscribe(
       (data) => {
         this.toastr.success('Votre argent à été déposé dans votre compte');
       },
     );
     console.log({no_compte_bancaire: no_compte_bancaire});
  }
}

