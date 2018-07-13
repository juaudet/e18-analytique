import { TestBed, inject } from '@angular/core/testing';

import { PageWebService } from './page-web.service';

describe('PageWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageWebService]
    });
  });

  it('should be created', inject([PageWebService], (service: PageWebService) => {
    expect(service).toBeTruthy();
  }));
});
