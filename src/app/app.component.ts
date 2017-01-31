import { Component } from '@angular/core';

import { Event } from './event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!!';

  event:Event = {id: 1, title: 'My 1st event', createdAt: '2017-02-01'};
}
