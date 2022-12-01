import { TestBed } from '@angular/core/testing';

import { TranslateStateService } from './translate-state.service';

describe('TranslateStateService', () => {
  let service: TranslateStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
