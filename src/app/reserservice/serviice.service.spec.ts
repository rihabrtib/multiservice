import { TestBed } from '@angular/core/testing';

import { ServiiceService } from './serviice.service';

describe('ServiiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiiceService = TestBed.get(ServiiceService);
    expect(service).toBeTruthy();
  });
});
