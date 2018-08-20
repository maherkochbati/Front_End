import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { PageHeaderModule } from '../../shared';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangePasswordComponent } from './change-password.component';
import { ChangePasswordService } from './change-password.service';




@NgModule({
  imports: [
    CommonModule, ChangePasswordRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  declarations: [ChangePasswordComponent],

  providers: [ChangePasswordService]

  
})
export class ChangePasswordModule { }
