import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UsersService } from '../layout/users.service';

import { SignUpService } from '../layout/signup.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
  providers: [UsersService, SignUpService]
})
export class SignupModule { }
