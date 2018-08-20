import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';
import { UsersService } from '../users.service';

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule],
    declarations: [GridComponent],
    providers: [UsersService]
})
export class GridModule {}
