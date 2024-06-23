import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './meetingRoom/login/login.component';
import { BookMeetingRoomComponent } from './meetingRoom/book-meeting-room/book-meeting-room.component';

const routes: Routes = [
    
  { path: '', component: LoginComponent },
  {
    path: 'Login', component: LoginComponent,
  },
  {
    path: 'BookMeetingRoom', component: BookMeetingRoomComponent,
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
LoginComponent