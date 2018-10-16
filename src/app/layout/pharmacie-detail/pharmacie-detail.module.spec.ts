import { PharmacieDetailModule } from './pharmacie-detail.module';

describe('PharmacieDetailModule', () => {
  let pharmacieDetailModule: PharmacieDetailModule;

  beforeEach(() => {
    pharmacieDetailModule = new PharmacieDetailModule();
  });

  it('should create an instance', () => {
    expect(pharmacieDetailModule).toBeTruthy();
  });
});
