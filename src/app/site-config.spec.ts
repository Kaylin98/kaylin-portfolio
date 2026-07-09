import { TestBed } from '@angular/core/testing';

import { SiteConfig } from './site-config';

describe('SiteConfig', () => {
  let service: SiteConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
