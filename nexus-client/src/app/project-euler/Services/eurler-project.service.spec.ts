import { TestBed } from '@angular/core/testing';

import { EurlerProjectService } from './eurler-project.service';

describe('EurlerProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EurlerProjectService = TestBed.get(EurlerProjectService);
    expect(service).toBeTruthy();
  });
});
