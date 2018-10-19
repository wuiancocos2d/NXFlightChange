import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightChangeComponent } from './flight-change/flight-change.component';
import { FlightRoutingModule } from './/flight-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlightRoutingModule
  ],
  declarations: [FlightChangeComponent]
})
export class FlightChangeModule { }
