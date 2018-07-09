import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevancesComponent } from './redevances.component';

describe('RedevancesComponent', () => {
  let component: RedevancesComponent;
  let fixture: ComponentFixture<RedevancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedevancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedevancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
