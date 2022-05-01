import { TestBed } from '@angular/core/testing';

import { BaseHrefService } from './base-href.service';

describe('BaseHrefService', () => {
  let service: BaseHrefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHrefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
