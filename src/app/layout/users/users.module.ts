import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageHeaderModule } from './../../shared';
import {UsersService} from '../users.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, UsersRoutingModule, PageHeaderModule, FormsModule],
    declarations: [UsersComponent],
    providers: [UsersService]
    
})
export class UsersModule {}
