import { TestBed } from '@angular/core/testing';

import { ReserserviceService } from './reserservice.service';

describe('ReserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReserserviceService = TestBed.get(ReserserviceService);
    expect(service).toBeTruthy();
  });
});
