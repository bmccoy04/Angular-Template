import { TestBed, inject } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService]
    });
  });

  it('should be created', inject([SpinnerService], (service: SpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
