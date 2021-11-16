import { TestBed } from '@angular/core/testing';

import { ImoveisService } from './imoveis.service';

describe('ImoveisService', () => {
  let service: ImoveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImoveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
