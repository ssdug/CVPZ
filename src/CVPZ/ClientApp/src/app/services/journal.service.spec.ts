import { TestBed } from '@angular/core/testing';

import { JournalService } from './journal.service';

describe('JournalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JournalService = TestBed.get(JournalService);
    expect(service).toBeTruthy();
  });
});
