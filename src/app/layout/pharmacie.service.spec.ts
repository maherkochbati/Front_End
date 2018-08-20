import { TestBed, inject } from '@angular/core/testing';

import { PharmacieService } from './pharmacie.service';

describe('PharmacieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmacieService]
    });
  });

  it('should be created', inject([PharmacieService], (service: PharmacieService) => {
    expect(service).toBeTruthy();
  }));
});
