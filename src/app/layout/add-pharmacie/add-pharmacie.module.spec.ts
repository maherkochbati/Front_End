import { AddPharmacieModule } from './add-pharmacie.module';

describe('AddPharmacieModule', () => {
  let addPharmacieModule: AddPharmacieModule;

  beforeEach(() => {
    addPharmacieModule = new AddPharmacieModule();
  });

  it('should create an instance', () => {
    expect(addPharmacieModule).toBeTruthy();
  });
});
