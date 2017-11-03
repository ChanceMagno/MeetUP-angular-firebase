import { TestBed, inject } from '@angular/core/testing';

import { MeetService } from './meet.service';

describe('MeetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetService]
    });
  });

  it('should be created', inject([MeetService], (service: MeetService) => {
    expect(service).toBeTruthy();
  }));
});
