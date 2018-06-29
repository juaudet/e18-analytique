import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBordPubComponent } from './tableau-bord-pub.component';

describe('TableauBordPubComponent', () => {
  let component: TableauBordPubComponent;
  let fixture: ComponentFixture<TableauBordPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauBordPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBordPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
