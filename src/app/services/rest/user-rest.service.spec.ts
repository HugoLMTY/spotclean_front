/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserRestService } from './user-rest.service';

describe('Service: UserRest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRestService]
    });
  });

  it('should ...', inject([UserRestService], (service: UserRestService) => {
    expect(service).toBeTruthy();
  }));
});
