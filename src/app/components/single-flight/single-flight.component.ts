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
  @Input() updateTime: number = 0;
  @Input() flight: FlightData;
  @Output() flightUpdate = new EventEmitter<string>();

  private timerId: any;

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.eventTimer();
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  showMoreInfoAlert() {
    this.flightService.showMoreInfoAlert(this.flight);
  }

  // complete this method which works as a timer
  // for sending an update message
  // after updateTime is complete

  eventTimer(): void {
    // TODO: FALTA COINCIDIR MENSAJES CON 'updateTime' CORRECTAMENTE
    this.flightUpdate.emit(
      `The flight ${this.flight.id} ${this.flight.updateTime}`
    );
    this.timerId = setTimeout(() => {
      this.flightUpdate.emit(
        `The flight ${this.flight.id} ${
          this.flight.type === 'entering' ? 'landed' : 'took of'
        }`
      );
    }, this.flight.updateTime * 1000);
    // }, this.updateTime * 1000);
  }
}
