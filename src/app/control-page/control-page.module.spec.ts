import { ControlPageModule } from './control-page.module';

describe('ControlPageModule', () => {
  let controlPageModule: ControlPageModule;

  beforeEach(() => {
    controlPageModule = new ControlPageModule();
  });

  it('should create an instance', () => {
    expect(controlPageModule).toBeTruthy();
  });
});
