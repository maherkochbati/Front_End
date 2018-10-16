import { PharmaciesModule } from './pharmacies.module';

describe('PharmaciesModule', () => {
  let pharmaciesModule: PharmaciesModule;

  beforeEach(() => {
    pharmaciesModule = new PharmaciesModule();
  });

  it('should create an instance', () => {
    expect(pharmaciesModule).toBeTruthy();
  });
});
