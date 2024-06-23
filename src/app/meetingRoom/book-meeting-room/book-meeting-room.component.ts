import { Component, HostListener, OnInit } from '@angular/core';
import { BookMeetingRoomService } from '../../services/book-meeting-room.service';
import { Meeting } from '../../class/meeting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-meeting-room',
  templateUrl: './book-meeting-room.component.html',
  styleUrl: './book-meeting-room.component.css'
})
export class BookMeetingRoomComponent implements OnInit {
  upComingMeetings:Meeting[] = [];
  roomMeetingsDetails:Meeting[] = [];
  meetingRoom = [ 'Meeting Room #1', 'Meeting Room #2', 'Meeting Room #3', 'Meeting Room #4'];
  selectedMeetingRoom:any;
  showBookMeetingPopup:boolean = false;
  showMeetingRoom:boolean = false;
  showWrongTimeError = false;
  meetingData:Meeting={
    MeetingDate: new Date(),
    startTime: '',
    endTime: '',
    agenda: '',
    MeetingRoom: '',
    userName: ''
  };
  backupMeetingData:Meeting[] = [];
  @HostListener('window:beforeunload', [ '$event' ])
  unloadHandler(event:any) {
  this.logout()
  }
  constructor(
    private router: Router,
    public bookMeetingRoomService:BookMeetingRoomService
  ) {}
  ngOnInit(): void {
  this.meetingData.userName = this.bookMeetingRoomService.loginUserName;
  this.selectedMeetingRoom = this.meetingRoom[0];
  }
  bookMeeting(){
    this.meetingData = {
      MeetingDate: new Date(),
      startTime: '',
      endTime: '',
      agenda: '',
      MeetingRoom: '',
      userName: this.bookMeetingRoomService.loginUserName
    }
    this.showMeetingRoom = false;
    this.showWrongTimeError = false;
    this.showBookMeetingPopup = true;
  }
  onSelectMeetingRoom(){
    this.roomMeetingsDetails = JSON.parse(JSON.stringify(this.backupMeetingData.filter(x=> x.MeetingRoom == this.selectedMeetingRoom)));
  }
  searchRooms(){
    this.showMeetingRoom = true;
  }
  ChangeTime(){
    //console.log("this.meetingData.startTime",this.meetingData.startTime)
    this.showWrongTimeError = false
    if(this.meetingData.startTime != '' && this.meetingData.endTime != ''){
      if(Number(this.meetingData.startTime.split(':')[0])>=9 && Number(this.meetingData.startTime.split(':')[0])<=18 && Number(this.meetingData.endTime.split(':')[0])>=9 && Number(this.meetingData.endTime.split(':')[0])<=18){
        const startDateTime = new Date(`2000-01-01T${this.meetingData.startTime}`);
        const endDateTime = new Date(`2000-01-01T${this.meetingData.endTime}`);
  
        if (startDateTime < endDateTime) {
          const diffMilliseconds = Math.abs(endDateTime.getTime() - startDateTime.getTime());
          const hours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
          const minutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
          if(hours==0 && minutes<30){
            this.showWrongTimeError = true;
          }
          //console.log("timeDifference", `${hours} hours ${minutes} minutes`)
      }else{
        this.showWrongTimeError = true;
      }
    }else{
      this.showWrongTimeError = true;
    }
  }
    this.showMeetingRoom = false;
    this.meetingData.agenda = '';
    this.meetingData.MeetingRoom = '';
  }
  closeDialog(){
    this.showBookMeetingPopup = false;

  }
  BoomMeeting(){
      this.backupMeetingData.push(this.meetingData);
      this.closeDialog();
      this.dataBind();
  }
  dataBind(){
    this.upComingMeetings = JSON.parse(JSON.stringify(this.backupMeetingData));
    this.roomMeetingsDetails = JSON.parse(JSON.stringify(this.backupMeetingData.filter(x=> x.MeetingRoom == this.selectedMeetingRoom)));
  }
  delete(data:any){
    this.backupMeetingData = this.backupMeetingData.filter(x=> x.MeetingDate != data.MeetingDate && x.MeetingRoom != data.MeetingDate
       && x.agenda != data.agenda && x.startTime != data.startTime && x.endTime != data.endTime)
       this.dataBind();
  }
  logout(){
    localStorage.removeItem('id');
    this.router.navigate(["/"]);
  }
}
