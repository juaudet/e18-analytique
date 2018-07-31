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

  redevances: Redevances;
  redevancesLive: Redevances;

  constructor(private redevancesService: RedevancesService, private toastr: ToastrService) { }

  ngOnInit() {
     this.getRedevances();
  }

   getRedevances(): void {
     this.redevancesService.getRedevances().subscribe(
      (data) => {
        this.redevances = data;
         console.log(this.redevances);
       }
     ); }

   reclamerRedevances(redevances: Redevances): void {
     this.redevancesService.postRedevances(redevances).subscribe(
       (data) => {
         this.toastr.success('Votre argent à été déposé dans votre compte');

       }
     ); }
}

