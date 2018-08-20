import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import { RolesComponent } from './roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { RoleService } from '../role.service';


@NgModule({
    imports: [CommonModule, RolesRoutingModule, PageHeaderModule],
    declarations: [RolesComponent],
    providers: [RoleService]
    
})
export class RolesModule {}
