import { TestBed } from '@angular/core/testing';

import { DonaService } from './dona.service';

describe('DonaService', () => {
  let service: DonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
