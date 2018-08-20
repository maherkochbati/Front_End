import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { RoleService } from '../role.service';
import { PharmacieService } from '../pharmacie.service';


@NgModule({
    imports: [CommonModule, AddUserRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule],
    declarations: [AddUserComponent],
    providers: [UsersService, RoleService, PharmacieService]
})
export class AddUserModule {}
