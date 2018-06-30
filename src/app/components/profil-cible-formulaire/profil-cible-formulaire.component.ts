import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProfilCible } from '../../models/profil-cible';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil-cible-formulaire',
  templateUrl: './profil-cible-formulaire.component.html',
  styleUrls: ['./profil-cible-formulaire.component.css']
})
export class ProfilCibleFormulaireComponent implements OnInit {

  @Input() profilCible: ProfilCible;
  @Output() saveEvent = new EventEmitter<ProfilCible>();

  ajout: FormGroup;

  constructor( private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.ajout = this.formBuilder.group({
      ajoutLigne: this.formBuilder.array([this.initItemRows()]) // here
    });
  }

  initItemRows() {
    return this.formBuilder.group({
      url: ['']
    });
  }
  OnSubmit() {
    this.saveEvent.next(this.profilCible);
  }

  AjouterLigneUrl() {
    const control = <FormArray>this.ajout.controls['ajoutLigne'];
    control.push(this.initItemRows());
    console.log('this works');
  }

  RetirerLigneUrl(index: number) {
    const control = <FormArray>this.ajout.controls['itemRows'];
    control.removeAt(index);
  }
}
