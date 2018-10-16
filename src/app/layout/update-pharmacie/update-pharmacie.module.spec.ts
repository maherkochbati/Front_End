import { UpdatePharmacieModule } from './update-pharmacie.module';

describe('UpdatePharmacieModule', () => {
  let updatePharmacieModule: UpdatePharmacieModule;

  beforeEach(() => {
    updatePharmacieModule = new UpdatePharmacieModule();
  });

  it('should create an instance', () => {
    expect(updatePharmacieModule).toBeTruthy();
  });
});
