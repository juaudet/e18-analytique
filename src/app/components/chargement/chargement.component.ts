import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chargement',
  templateUrl: './chargement.component.html',
  styleUrls: ['./chargement.component.css']
})
export class ChargementComponent implements OnInit {
  @Input() chargement: any;

  constructor() { }

  ngOnInit() {
  }

}
