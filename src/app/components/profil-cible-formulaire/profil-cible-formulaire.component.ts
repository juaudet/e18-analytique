import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfilCible } from '../../models/profil-cible';
import { SiteWebProfilCible } from '../../models/site-web-profil-cible';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil-cible-formulaire',
  templateUrl: './profil-cible-formulaire.component.html',
  styleUrls: ['./profil-cible-formulaire.component.css']
})
export class ProfilCibleFormulaireComponent implements OnInit {

  @Input() profilCible: ProfilCible;
  @Output() saveEvent = new EventEmitter<ProfilCible>();

  // ajout: FormGroup;
  // url: [''];
  profilCibleForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profilCibleForm = this.formBuilder.group({
      nom: this.profilCible.nom,
      sitesWeb: this.formBuilder.array([])
    });
    this.setSitesWeb(this.profilCible.sites_web_profil_cible);
  }

  setSitesWeb(sitesWeb: SiteWebProfilCible[]) {
    const siteWebFGs = sitesWeb.map(siteWeb => this.formBuilder.group(siteWeb));
    const siteWebFormArray = this.formBuilder.array(siteWebFGs);
    this.profilCibleForm.setControl('sitesWeb', siteWebFormArray);
  }

  get sitesWeb(): FormArray {
    return this.profilCibleForm.get('sitesWeb') as FormArray;
  };

  /*
  initItemRows() {
    return this.formBuilder.group({
      url: ['']
    });
  }
  */

  OnSubmit() {
    this.profilCible = this.prepareSaveProfilCible();
    this.saveEvent.emit(this.profilCible);
  }

  /*
  AjouterLigneUrl() {
    const control = <FormArray>this.ajout.controls['ajoutLigne'];
    control.push(this.initItemRows());
    console.log('this works');
  }
  */

  ajouterLigneUrl() {
    this.sitesWeb.push(this.formBuilder.group(new SiteWebProfilCible()));
  }

  /*
  RetirerLigneUrl(index: number) {
    const control = <FormArray>this.ajout.controls['itemRows'];
    control.removeAt(index);
  }
  */

  retirerLigneUrl(index: number) {
    this.sitesWeb.removeAt(index);
  }

  prepareSaveProfilCible(): ProfilCible {
    const formModel = this.profilCibleForm.value;

    // deep copy of form siteWeb
    const sitesWebProfilsCibleDeepCopy: SiteWebProfilCible[] = formModel.sitesWeb.map(
      (siteWeb: SiteWebProfilCible) => Object.assign({}, siteWeb)
    );

    // return new `ProfilCible` object containing a combination of original
    // ProfilCible value(s) and deep copies of changed form model values
    const saveProfilCible: ProfilCible = {
      id: this.profilCible.id,
      nom: formModel.nom as string,
      sites_web_profil_cible: sitesWebProfilsCibleDeepCopy
    };
    return saveProfilCible;
  }


}
