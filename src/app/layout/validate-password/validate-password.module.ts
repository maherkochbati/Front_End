import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import { ValidatePasswordComponent } from './validate-password.component';
import { ValidatePasswordRoutingModule } from './validate-password-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, ValidatePasswordRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ValidatePasswordComponent],
    
    
})
export class ValidatePasswordModule {}
