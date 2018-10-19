import { FlightRoutingModule } from './flight-routing.module';

describe('FlightRoutingModule', () => {
  let flightRoutingModule: FlightRoutingModule;

  beforeEach(() => {
    flightRoutingModule = new FlightRoutingModule();
  });

  it('should create an instance', () => {
    expect(flightRoutingModule).toBeTruthy();
  });
});
