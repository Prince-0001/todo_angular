import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
