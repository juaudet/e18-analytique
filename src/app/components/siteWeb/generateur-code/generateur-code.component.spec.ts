import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurCodeComponent } from './generateur-code.component';

describe('GenerateurCodeComponent', () => {
  let component: GenerateurCodeComponent;
  let fixture: ComponentFixture<GenerateurCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateurCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateurCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
