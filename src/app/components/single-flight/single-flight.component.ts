import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlightData } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
// Use relative paths when importing services or components!

@Component({
  selector: 'single-flight',
  templateUrl: './single-flight.component.html',
  styleUrls: ['./single-flight.component.css'],
})
export class SingleFlightComponent implements OnInit {
  // private updateTime: number = 0;
  @Input() flight: FlightData;
  @Output() flightUpdate = new EventEmitter<string>();

  private timerId: any;

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.eventTimer();
  }


  showMoreInfoAlert() {
    this.flightService.showMoreInfoAlert(this.flight);
  }

  // complete this method which works as a timer
  // for sending an update message
  // after updateTime is complete
  eventTimer(): void {
    this.timerId = setInterval(() => {
      const message = `The flight ${this.flight.id} ${
        this.flight.type === 'entering' ? 'landed' : 'took off'
      }`;

      this.flightUpdate.emit(message);

      clearInterval(this.timerId);
    }, this.flight.updateTime * 1000);
  }
}
