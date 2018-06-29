import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProfilCible } from '../../models/profil-cible';

@Component({
  selector: 'app-profil-cible-formulaire',
  templateUrl: './profil-cible-formulaire.component.html',
  styleUrls: ['./profil-cible-formulaire.component.css']
})
export class ProfilCibleFormulaireComponent implements OnInit {
	
  @Input() profilCible: ProfilCible;
  @Output() saveEvent = new EventEmitter<ProfilCible>();

  constructor() { }

  ngOnInit() {
  	
  }

  OnSubmit() {
  	this.saveEvent.next(this.profilCible);
  }

}
