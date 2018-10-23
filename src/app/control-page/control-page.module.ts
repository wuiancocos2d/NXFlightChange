import {NgModule} from '@angular/core';
import {FlightChangeListComponent} from './flight-change-list';
import {ControlRoutingModule} from './control-routing.module';
import {FlightRoutingModule} from '../flight-change/flight-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    ControlRoutingModule,
    ShareModule,
    FlightRoutingModule
  ],
  declarations: [
    FlightChangeListComponent,
  ]
})
export class ControlPageModule {
}
