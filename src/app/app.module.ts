import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';

// Use relative paths when importing services or components!
import { DashboardScreen } from './components/dashboard-screen/dashboard.screen.component';
import { SingleFlightComponent } from './components/single-flight/single-flight.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CommonModule, FormsModule],
  declarations: [AppComponent, DashboardScreen, SingleFlightComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
