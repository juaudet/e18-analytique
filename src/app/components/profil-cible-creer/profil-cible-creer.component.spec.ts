import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ProfilCibleCreerComponent} from './profil-cible-creer.component';

describe('ProfilCibleCreerComponent', () => {
  let component: ProfilCibleCreerComponent;
  let fixture: ComponentFixture<ProfilCibleCreerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCibleCreerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCibleCreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
