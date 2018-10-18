import { FlightChangeModule } from './flight-change.module';

describe('FlightChangeModule', () => {
  let flightChangeModule: FlightChangeModule;

  beforeEach(() => {
    flightChangeModule = new FlightChangeModule();
  });

  it('should create an instance', () => {
    expect(flightChangeModule).toBeTruthy();
  });
});
