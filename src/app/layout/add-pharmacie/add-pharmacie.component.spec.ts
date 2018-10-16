import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacieComponent } from './add-pharmacie.component';

describe('AddPharmacieComponent', () => {
  let component: AddPharmacieComponent;
  let fixture: ComponentFixture<AddPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
