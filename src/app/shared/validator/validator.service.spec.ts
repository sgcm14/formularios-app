import { TestBed } from '@angular/core/testing';

import { ValidatorService } from 'src/app/shared/validator/validator.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
