import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MeetingRoom.UI';
  constructor(
    private router: Router,
  ) {}
  ngOnInit() {
    this.router.navigate(['/'])
  }
}
