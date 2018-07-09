import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampagnePubComponent } from './campagne-pub-creer.component';

describe('CampagnePubComponent', () => {
  let component: CampagnePubComponent;
  let fixture: ComponentFixture<CampagnePubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampagnePubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampagnePubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
