import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateUserRoutingModule } from './update-user-routing.module';
import { UpdateUserComponent } from './update-user.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { RoleService } from '../role.service';
import { PharmacieService } from '../pharmacie.service';




@NgModule({
    imports: [CommonModule, UpdateUserRoutingModule, PageHeaderModule, FormsModule],
    declarations: [UpdateUserComponent],
    providers: [UsersService, RoleService, PharmacieService]
    
})

export class UpdateUserModule {}
