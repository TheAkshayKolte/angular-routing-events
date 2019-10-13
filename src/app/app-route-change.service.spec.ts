import { TestBed } from '@angular/core/testing';

import { AppRouteChangeService } from './app-route-change.service';

describe('AppRouteChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppRouteChangeService = TestBed.get(AppRouteChangeService);
    expect(service).toBeTruthy();
  });
});
