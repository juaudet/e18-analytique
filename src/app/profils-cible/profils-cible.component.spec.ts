import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsCibleComponent } from './profils-cible.component';

describe('ProfilsCibleComponent', () => {
  let component: ProfilsCibleComponent;
  let fixture: ComponentFixture<ProfilsCibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilsCibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilsCibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
