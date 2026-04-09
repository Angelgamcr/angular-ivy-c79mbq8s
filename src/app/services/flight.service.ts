import { Injectable } from '@angular/core';
import { FlightData } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor() {}

  // DO NOT MODIFY THIS FUNCTION
  getFlights(): Promise<FlightData[]> {
    return new Promise<FlightData[]>((resolve, reject) => {
      resolve(this.flights);
    });
  }

  // COMPLETE IF NECESSARY
  getFlightById(id: string): Promise<FlightData | undefined> {
    // TODO: Find flight by ID
    return new Promise((resolve) => {
      resolve(this.flights.find((f) => f.id === id));
    });
  }

  // COMPLETE IF NECESSARY
  showMoreInfoAlert(currentFlight: FlightData) {
    alert(
      `Flight ${currentFlight.id}
        type: ${currentFlight.type}
        Destination: ${currentFlight.destination}
        Model: ${currentFlight.model}
        People: ${currentFlight.people}`
    );
  }

  // DO NOT MODIFY THIS ARRAY
  private flights: FlightData[] = [
    {
      id: 'FL001',
      type: 'entering',
      destination: 'Guatemala',
      people: 180,
      model: 'Boeing 737',
      updateTime: 3,
    },
    {
      id: 'FL002',
      type: 'leaving',
      destination: 'Mexico',
      people: 150,
      model: 'Airbus A320',
      updateTime: 6,
    },
    {
      id: 'FL003',
      type: 'entering',
      destination: 'United States',
      people: 200,
      model: 'Boeing 777',
      updateTime: 9,
    },
    {
      id: 'FL004',
      type: 'leaving',
      destination: 'Canada',
      people: 170,
      model: 'Airbus A330',
      updateTime: 12,
    },
    {
      id: 'FL005',
      type: 'entering',
      destination: 'Brazil',
      people: 160,
      model: 'Embraer E190',
      updateTime: 15,
    },
    {
      id: 'FL006',
      type: 'leaving',
      destination: 'Argentina',
      people: 140,
      model: 'Boeing 737 MAX',
      updateTime: 18,
    },
    {
      id: 'FL007',
      type: 'entering',
      destination: 'Spain',
      people: 190,
      model: 'Airbus A350',
      updateTime: 21,
    },
    {
      id: 'FL008',
      type: 'leaving',
      destination: 'France',
      people: 175,
      model: 'Boeing 787',
      updateTime: 24,
    },
    {
      id: 'FL009',
      type: 'entering',
      destination: 'Germany',
      people: 165,
      model: 'Airbus A321',
      updateTime: 27,
    },
    {
      id: 'FL010',
      type: 'leaving',
      destination: 'Italy',
      people: 155,
      model: 'Boeing 767',
      updateTime: 30,
    },
    {
      id: 'FL011',
      type: 'entering',
      destination: 'Japan',
      people: 210,
      model: 'Boeing 777X',
      updateTime: 33,
    },
    {
      id: 'FL012',
      type: 'leaving',
      destination: 'South Korea',
      people: 185,
      model: 'Airbus A380',
      updateTime: 36,
    },
    {
      id: 'FL013',
      type: 'entering',
      destination: 'China',
      people: 220,
      model: 'Comac C919',
      updateTime: 39,
    },
    {
      id: 'FL014',
      type: 'leaving',
      destination: 'India',
      people: 195,
      model: 'Boeing 737',
      updateTime: 42,
    },
    {
      id: 'FL015',
      type: 'entering',
      destination: 'Australia',
      people: 200,
      model: 'Airbus A350',
      updateTime: 45,
    },
    {
      id: 'FL016',
      type: 'leaving',
      destination: 'New Zealand',
      people: 160,
      model: 'Boeing 787',
      updateTime: 48,
    },
    {
      id: 'FL017',
      type: 'entering',
      destination: 'South Africa',
      people: 170,
      model: 'Airbus A330',
      updateTime: 51,
    },
    {
      id: 'FL018',
      type: 'leaving',
      destination: 'Egypt',
      people: 150,
      model: 'Boeing 737 MAX',
      updateTime: 54,
    },
    {
      id: 'FL019',
      type: 'entering',
      destination: 'Russia',
      people: 180,
      model: 'Sukhoi Superjet 100',
      updateTime: 57,
    },
    {
      id: 'FL020',
      type: 'leaving',
      destination: 'Turkey',
      people: 165,
      model: 'Airbus A320',
      updateTime: 60,
    },
    {
      id: 'FL021',
      type: 'entering',
      destination: 'Thailand',
      people: 190,
      model: 'Boeing 777',
      updateTime: 63,
    },
    {
      id: 'FL022',
      type: 'leaving',
      destination: 'Vietnam',
      people: 175,
      model: 'Airbus A321',
      updateTime: 66,
    },
    {
      id: 'FL023',
      type: 'entering',
      destination: 'Indonesia',
      people: 160,
      model: 'Boeing 737',
      updateTime: 69,
    },
    {
      id: 'FL024',
      type: 'leaving',
      destination: 'Philippines',
      people: 155,
      model: 'Airbus A320',
      updateTime: 72,
    },
    {
      id: 'FL025',
      type: 'entering',
      destination: 'United Kingdom',
      people: 200,
      model: 'Boeing 787',
      updateTime: 75,
    },
  ];
}
