import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagnePubFormulaireComponent } from './campagne-pub-formulaire.component';

describe('CampagnePubFormulaireComponent', () => {
  let component: CampagnePubFormulaireComponent;
  let fixture: ComponentFixture<CampagnePubFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagnePubFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagnePubFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
