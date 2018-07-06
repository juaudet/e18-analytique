import { TestBed, inject } from '@angular/core/testing';

import { CampagnePublicitaireService } from './campagne-publicitaire.service';

describe('CampagnePublicitaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampagnePublicitaireService]
    });
  });

  it('should be created', inject([CampagnePublicitaireService], (service: CampagnePublicitaireService) => {
    expect(service).toBeTruthy();
  }));
});
