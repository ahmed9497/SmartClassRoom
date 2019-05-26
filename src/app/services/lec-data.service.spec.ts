import { TestBed } from '@angular/core/testing';

import { LecDataService } from './lec-data.service';

describe('LecDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LecDataService = TestBed.get(LecDataService);
    expect(service).toBeTruthy();
  });
});
