import { Component, OnInit } from '@angular/core';
// Use relative paths when importing services or components!
import { FlightData } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'dashboard-screen',
  templateUrl: './dashboard.screen.component.html',
  styleUrls: ['./dashboard.screen.component.css'],
})
export class DashboardScreen implements OnInit {
  // Use this array for storing the flights
  public flights: FlightData[] = [];
  public flightsFiltered: FlightData[] = [];

  // Use this array for storing the flight update messages
  public updateMessages: string[] = [];

  // Use this string for storing the flight ID for searching
  public searchText: string = '';
  public showMaxOnly: boolean = false;

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.loadFlights();
  }

  async loadFlights() {
    // console.log('flights loaded:', this.flights);
    this.flights = await this.flightService.getFlights();
    this.flightsFiltered = this.flights;
  }

  // call this method when adding update messages
  onFlightUpdate = (updateMessage: string) => {
    if (this.updateMessages.length == 0) {
      this.updateMessages.unshift(
        'Starting with the first flight of the day! ☀️'
      );
    }
    this.updateMessages.unshift(updateMessage);
    if (this.updateMessages.length == this.flights.length + 1) {
      this.updateMessages.unshift('This was the last flight of the day! 🌙');
    }
  };

  // call this method when searching a flight with the searchbar
  async onSearchButton() {
    const flight = await this.flightService.getFlightById(this.searchText);
    if (!flight) {
      alert('Flight not found');
      return;
    }
    alert(
      `Flight: ${flight.id}
      type: ${flight.type}
      Destination: ${flight.destination}
      Model: ${flight.model}
      People: ${flight.people}`
    );
  }

  async onToggleMax() {
    if (this.showMaxOnly) {
      this.flightsFiltered = this.flights.filter((f) => f.people > 175);
    } else {
      this.flightsFiltered = this.flights;
    }
  }
}
