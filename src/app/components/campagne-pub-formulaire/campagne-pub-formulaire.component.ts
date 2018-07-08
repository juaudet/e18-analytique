import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CampagnePublicitaire} from '../../models/campagne-publicitaire';
import { ProfilCibleService } from '../../services/profil-cible.service';

@Component({
  selector: 'app-campagne-pub-formulaire',
  templateUrl: './campagne-pub-formulaire.component.html',
  styleUrls: ['./campagne-pub-formulaire.component.css']
})
export class CampagnePubFormulaireComponent implements OnInit {

  @Input() campagnePublicitaire: CampagnePublicitaire;
  @Output() saveEvent = new EventEmitter<CampagnePublicitaire>();

  campagnePublicitaireForm: FormGroup;
  imageHorizontale: string;

  constructor( private formBuilder: FormBuilder, private toastr: ToastrService, private profilCibleService: ProfilCibleService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.campagnePublicitaireForm = this.formBuilder.group({
      nom: this.campagnePublicitaire.nom,
      budget: this.campagnePublicitaire.budget,
      date_debut: this.campagnePublicitaire.date_debut,
      date_fin: this.campagnePublicitaire.date_fin,
      active: this.campagnePublicitaire.active,
      profilsCible: this.formBuilder.array([])
    });
  }

  // https://stackoverflow.com/a/40216616
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      // https://stackoverflow.com/a/36281449
      const fileReader: FileReader = new FileReader();
      fileReader.onloadend = () => {
        this.imageHorizontale = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
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
      nom: formModel.nom as string,
      budget: formModel.budget as number,
      date_fin: formModel.date_fin as string,
      date_debut: formModel.date_debut as string,
      active: formModel.active as boolean,
    };
    return saveCampagnePublicitaire;
  }

  
}
