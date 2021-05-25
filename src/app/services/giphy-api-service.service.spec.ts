import { TestBed } from '@angular/core/testing';

import { GiphyApiServiceService } from './giphy-api-service.service';

describe('GiphyApiServiceService', () => {
  let service: GiphyApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
