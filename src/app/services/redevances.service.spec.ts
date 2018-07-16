import { TestBed, inject } from '@angular/core/testing';

import { RedevancesService } from './redevances.service';

describe('RedevancesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedevancesService]
    });
  });

  it('should be created', inject([RedevancesService], (service: RedevancesService) => {
    expect(service).toBeTruthy();
  }));
});
