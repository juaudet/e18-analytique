import { TestBed, inject } from '@angular/core/testing';

import { ProfilCibleService } from './profil-cible.service';

describe('ProfilCibleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilCibleService]
    });
  });

  it('should be created', inject([ProfilCibleService], (service: ProfilCibleService) => {
    expect(service).toBeTruthy();
  }));
});
