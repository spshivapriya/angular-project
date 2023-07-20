import { TestBed } from '@angular/core/testing';

import { EmloyeeGuard } from './emloyee.guard';

describe('EmloyeeGuard', () => {
  let guard: EmloyeeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmloyeeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
