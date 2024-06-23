import { TestBed } from '@angular/core/testing';

import { BookMeetingRoomService } from './book-meeting-room.service';

describe('BookMeetingRoomService', () => {
  let service: BookMeetingRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookMeetingRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
