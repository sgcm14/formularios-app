import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

describe('EmailValidatorService', () => {
  let service: EmailValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(EmailValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
