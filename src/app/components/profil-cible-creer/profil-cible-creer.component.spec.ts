import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilFormComponent } from './profil-cible-creer.component';

describe('UserProfilFormComponent', () => {
  let component: UserProfilFormComponent;
  let fixture: ComponentFixture<UserProfilFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
