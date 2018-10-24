import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightChangeListComponent } from './flight-change-list';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: FlightChangeListComponent,
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class ControlRoutingModule { }
