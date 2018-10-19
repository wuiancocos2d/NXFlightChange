import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightChangeListComponent } from './flight-change-list.component';

describe('FlightChangeListComponent', () => {
  let component: FlightChangeListComponent;
  let fixture: ComponentFixture<FlightChangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightChangeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightChangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
