import { ControlRoutingModule } from './control-routing.module';

describe('ControlRoutingModule', () => {
  let controlRoutingModule: ControlRoutingModule;

  beforeEach(() => {
    controlRoutingModule = new ControlRoutingModule();
  });

  it('should create an instance', () => {
    expect(controlRoutingModule).toBeTruthy();
  });
});
