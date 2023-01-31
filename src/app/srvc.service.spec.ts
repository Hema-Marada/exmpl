import { TestBed } from '@angular/core/testing';

import { SrvcService } from './srvc.service';

describe('SrvcService', () => {
  let service: SrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
