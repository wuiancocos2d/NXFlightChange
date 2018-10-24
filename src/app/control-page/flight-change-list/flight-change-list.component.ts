import { Component, OnInit } from '@angular/core';
import {ChangeModel} from '../../core/models';
import {ChangesService} from '../../core/services';

@Component({
  selector: 'app-flight-change-list',
  templateUrl: './flight-change-list.component.html',
  styleUrls: ['./flight-change-list.component.css']
})
export class FlightChangeListComponent implements OnInit {
  changeList: ChangeModel[];
  constructor(
    private changesService: ChangesService
  ) { }

  ngOnInit() {
    this.getChangeList();
  }
  getChangeList() {
    this.changesService.getChangeList().subscribe(changes => this.changeList = changes);
  }
}
