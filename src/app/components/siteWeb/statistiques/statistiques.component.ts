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
        this.vueTotal = data;
        console.log(this.vueTotal);
      });
  }

  getProfitTotal(): void{
    this.statistiquesService.getProfitTotaux().subscribe(
      (data) =>{
        this.profitTotal = data;
        console.log(this.profitTotal);
      });
  }

}
