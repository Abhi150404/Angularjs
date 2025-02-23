import { TestBed } from '@angular/core/testing';

import { ManagaedataService } from './managaedata.service';

describe('ManagaedataService', () => {
  let service: ManagaedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagaedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
