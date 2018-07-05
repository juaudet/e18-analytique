import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagnePubCreerComponent } from './campagne-pub-creer.component';

describe('CampagnePubCreerComponent', () => {
  let component: CampagnePubCreerComponent;
  let fixture: ComponentFixture<CampagnePubCreerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagnePubCreerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagnePubCreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
