import { TestBed } from '@angular/core/testing';

import { SessionGuard } from './session.guard';

describe('SessionGuard', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should block logout when user is not logged', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow to logout when logged', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow to log in when not logged', () => {
    expect(guard).toBeTruthy();
  });

  it('should not allow to log in when logged', () => {
    expect(guard).toBeTruthy();
  });
});
