import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordSiteRowComponent } from './tableau-bord-site-row.component';

describe('TableauBordSiteRowComponent', () => {
  let component: TableauBordSiteRowComponent;
  let fixture: ComponentFixture<TableauBordSiteRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauBordSiteRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBordSiteRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
