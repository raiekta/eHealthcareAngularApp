import { TestBed } from '@angular/core/testing';

import { MyServicesService } from './my-services.service';

describe('MyServicesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    let service: MyServicesService = TestBed.get(MyServicesService);
    expect(service).toBeTruthy();
  });
});
