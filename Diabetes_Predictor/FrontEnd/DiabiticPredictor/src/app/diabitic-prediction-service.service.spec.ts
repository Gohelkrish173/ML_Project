import { TestBed } from '@angular/core/testing';

import { DiabiticPredictionServiceService } from './diabitic-prediction-service.service';

describe('DiabiticPredictionServiceService', () => {
  let service: DiabiticPredictionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabiticPredictionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
