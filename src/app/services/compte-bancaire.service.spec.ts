import { TestBed, inject } from '@angular/core/testing';

import { CompteBancaireService } from './compte-bancaire.service';

describe('CompteBancaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompteBancaireService]
    });
  });

  it('should be created', inject([CompteBancaireService], (service: CompteBancaireService) => {
    expect(service).toBeTruthy();
  }));
});
