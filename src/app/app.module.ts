import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './meetingRoom/login/login.component';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { BookMeetingRoomComponent } from './meetingRoom/book-meeting-room/book-meeting-room.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [
         AppComponent,
         LoginComponent,
         BookMeetingRoomComponent
    ],
    imports: [
        FormsModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        TableModule,
        DialogModule,
        DropdownModule
],
    providers: [

    ],
    bootstrap: [AppComponent],
  })
export class AppModule { }