import { Component, OnInit } from '@angular/core';
import { Redevances} from '../../../models/redevances';
import { RedevancesService } from '../../../services/redevances.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-redevances',
  templateUrl: './redevances.component.html',
  styleUrls: ['./redevances.component.css']
})
export class RedevancesComponent implements OnInit {


  redevance_to_pay: number;
  no_compte_bancaire: string;

  constructor(private redevancesService: RedevancesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getRedevances();
  }

   getRedevances(): void {
     this.redevancesService.getRedevances().subscribe(
      (data) => {
        this.redevance_to_pay = data['redevances_to_pay'];
        console.log(this.redevance_to_pay);

       },
     );
  }

   reclamerRedevances(no_compte_bancaire: string): void {
    this.redevancesService.patchRedevances(no_compte_bancaire).subscribe(
       (data) => {
         this.toastr.success('Votre argent à été déposé dans votre compte');
       },
      (error: any) => {
        this.toastr.error('Vous n\'avez aucune redevances à réclamer!');
      }
     );
     console.log(this.no_compte_bancaire);
  }
}

