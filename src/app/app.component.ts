import { Component } from '@angular/core';
import { AppRouteChangeService } from './app-route-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing-events';

  constructor(private appRouteChangeService: AppRouteChangeService) {
    
  }
}
