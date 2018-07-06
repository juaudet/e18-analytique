import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CampagnePublicitaire} from '../../models/campagne-publicitaire';

@Component({
  selector: 'app-campagne-pub-formulaire',
  templateUrl: './campagne-pub-formulaire.component.html',
  styleUrls: ['./campagne-pub-formulaire.component.css']
})
export class CampagnePubFormulaireComponent implements OnInit {

  @Input() campagnePublicitaire: CampagnePublicitaire;
  @Output() saveEvent = new EventEmitter<CampagnePublicitaire>();

  campagnePublicitaireForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.campagnePublicitaireForm = this.formBuilder.group({
      nom: this.campagnePublicitaire.nom,
      budget: this.campagnePublicitaire.budget,
      dateDebut: this.campagnePublicitaire.date_debut,
      dateFin: this.campagnePublicitaire.date_fin,
      active: this.campagnePublicitaire.active,
      id: this.campagnePublicitaire.id
    });
  }

  OnSubmit() {
    this.campagnePublicitaire = this.prepareSavecampagnePublicitaire();
    this.saveEvent.emit(this.campagnePublicitaire);
  }

  prepareSavecampagnePublicitaire(): CampagnePublicitaire {
    const formModel = this.campagnePublicitaireForm.value;

    // return new `campagnePublicitaire` object containing a combination of original
    // campagnePublicitaire value(s) and deep copies of changed form model values
    const saveCampagnePublicitaire: CampagnePublicitaire = {
      id: this.campagnePublicitaire.id,
      nom: formModel.nom as string,
      budget: formModel.budget as number,
      date_fin: formModel.date_fin as string,
      date_debut: formModel.date_debut as string,
      active: formModel.active as boolean,
    };
    return saveCampagnePublicitaire;
  }
}
