import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookMeetingRoomService } from '../../services/book-meeting-room.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName = '';
  password = '';
  constructor(
    private router: Router,
    public bookMeetingRoomService:BookMeetingRoomService
  ) {}
  ngOnInit() {
  }
  login(){
    if(this.userName.trim() == ''){
      alert("Please enter User Name")
    }else{
    if(this.password == 'Password123'){  
      this.bookMeetingRoomService.loginUserName =   this.userName;  
      this.router.navigate(['/BookMeetingRoom'])
    }else{
      if(this.password.trim() == ''){
        alert("Please enter Password")
      }else{
        alert("Wrong Password")
      }
    }
  }
  }
}
