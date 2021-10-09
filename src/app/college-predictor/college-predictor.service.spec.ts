import { TestBed } from '@angular/core/testing';

import { CollegePredictorService } from './college-predictor.service';

describe('CollegePredictorService', () => {
  let service: CollegePredictorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegePredictorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
