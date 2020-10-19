import { TestBed, inject } from '@angular/core/testing';

import { ServiceServiceService } from './service-service.service';

describe('ServiceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceServiceService]
    });
  });

  it('should be created', inject([ServiceServiceService], (service: ServiceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
