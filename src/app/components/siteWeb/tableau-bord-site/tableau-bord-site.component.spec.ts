import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordSiteComponent } from './tableau-bord-site.component';

describe('TableauBordSiteComponent', () => {
  let component: TableauBordSiteComponent;
  let fixture: ComponentFixture<TableauBordSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauBordSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBordSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
