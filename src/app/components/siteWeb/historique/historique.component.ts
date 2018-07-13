import { Component, OnInit } from '@angular/core';

import { PageWebService } from '../../../services/page-web.service';
import { PageWeb } from '../../../models/page-web';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  historique: PageWeb[];

  constructor(
  	private pageWebService: PageWebService
  ) { }

  ngOnInit() {
  	this.getHistorique();
  }

  getHistorique(): void {
  	this.pageWebService.getHistorique().subscribe(
  	  data => {
        this.historique = data;
        console.log(this.historique);
  	  },
  	  error => {

  	  }
  	);
  }

}
