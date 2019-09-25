import { TestBed } from '@angular/core/testing';

import { LoftsService } from './lofts.service';

describe('LoftsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoftsService = TestBed.get(LoftsService);
    expect(service).toBeTruthy();
  });
});
