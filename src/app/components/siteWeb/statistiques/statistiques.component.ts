import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StatistiquesService } from '../../../services/statistiques.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  vueTotal: number;
  profitTotal: number;

  constructor(
    private statistiquesService: StatistiquesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getNombreVue();
    this.getProfitTotal();
  }

  getNombreVue(): void{
    this.statistiquesService.getNombreVue().subscribe(
      (data) =>{
        this.vueTotal = data['nombreVue'];
        console.log(this.vueTotal);
      },
      (error: any) => {
        this.toastr.error("Nous n'arrivons pas à obtenir votre nombre de visite!");
      }
   );
  }

  getProfitTotal(): void{
    this.statistiquesService.getProfitTotaux().subscribe(
      (data) =>{
        this.profitTotal = data['profitTotaux'];
        console.log(this.profitTotal);
      },
      (error: any) => {
        this.toastr.error("Nous n'arrivons pas à obtenir vos profits totaux !");
      }
   );
  }

}
