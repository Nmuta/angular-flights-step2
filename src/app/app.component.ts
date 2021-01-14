import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //(delete this code and code something similar on your own:)
    flights: {}[] = [
      {origin: "Denver", destination: "Miami"},
      {origin: "Rio", destination: "NYC"},
      {origin: "Boston", destination: "Chicago"},
    ];
}
