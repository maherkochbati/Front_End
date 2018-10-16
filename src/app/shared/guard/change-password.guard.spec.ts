import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {ChangePasswordGuard} from './change-password.guard';

describe('ChangePasswordGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [ChangePasswordGuard]
    });
  });

  it('should ...', inject([ChangePasswordGuard], (guard: ChangePasswordGuard) => {
    expect(guard).toBeTruthy();
  }));
});
