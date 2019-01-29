import { TestBed } from '@angular/core/testing';

import { AccountFetcherService } from './account-fetcher.service';

describe('AccountFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountFetcherService = TestBed.get(AccountFetcherService);
    expect(service).toBeTruthy();
  });
});
