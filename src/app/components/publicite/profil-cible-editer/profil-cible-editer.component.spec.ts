import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCibleEditerComponent } from './profil-cible-editer.component';

describe('ProfilCibleEditerComponent', () => {
  let component: ProfilCibleEditerComponent;
  let fixture: ComponentFixture<ProfilCibleEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCibleEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCibleEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
