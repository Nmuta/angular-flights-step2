import { Component, OnInit } from '@angular/core';
import { Flight } from './flight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights: Flight[] = [
    {origin: "Denver", destination: "Miami", flightNumber: 5, 
    depart: new Date(), arrive: new Date(), nonstop: true},
    {origin: "Phoenix", destination: "NYC", flightNumber: 5, 
    depart: new Date(), arrive: new Date(), nonstop: true, snacks: "crackers"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
