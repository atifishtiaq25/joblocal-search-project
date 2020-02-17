import { TestBed } from '@angular/core/testing';

import { JobViewService } from './job-view.service';

describe('JobViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobViewService = TestBed.get(JobViewService);
    expect(service).toBeTruthy();
  });
});
