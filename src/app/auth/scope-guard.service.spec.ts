import { TestBed } from '@angular/core/testing';

import { ScopeGuardService } from './scope-guard.service';

describe('ScopeGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScopeGuardService = TestBed.get(ScopeGuardService);
    expect(service).toBeTruthy();
  });
});
