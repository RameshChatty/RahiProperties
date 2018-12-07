import { TestBed, inject } from '@angular/core/testing';

import { ModeloneService } from './modelone.service';

describe('ModeloneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModeloneService]
    });
  });

  it('should be created', inject([ModeloneService], (service: ModeloneService) => {
    expect(service).toBeTruthy();
  }));
});
