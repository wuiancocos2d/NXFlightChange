import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightChangeListComponent } from './flight-change-list/flight-change-list.component';
import { ControlRoutingModule } from './control-routing.module';
import { FlightRoutingModule } from '../flight-change/flight-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ControlRoutingModule,
    FlightRoutingModule
  ],
  declarations: [FlightChangeListComponent]
})
export class ControlPageModule { }
