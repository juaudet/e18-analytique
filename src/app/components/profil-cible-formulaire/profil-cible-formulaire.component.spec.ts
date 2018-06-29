import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCibleFormulaireComponent } from './formulaire-profil-cible.component';

describe('ProfilCibleFormulaireComponent', () => {
  let component: ProfilCibleFormulaireComponent;
  let fixture: ComponentFixture<ProfilCibleFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCibleFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCibleFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
