import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMeetingRoomComponent } from './book-meeting-room.component';

describe('BookMeetingRoomComponent', () => {
  let component: BookMeetingRoomComponent;
  let fixture: ComponentFixture<BookMeetingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookMeetingRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookMeetingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
