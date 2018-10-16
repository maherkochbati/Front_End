import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePharmacieRoutingModule } from './update-pharmacie-routing.module';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';
import { UpdatePharmacieComponent } from './update-pharmacie.component';
import { PharmacieService } from '../pharmacie.service';
import { RegionService } from '../region.service';

@NgModule({
  imports: [
    CommonModule, UpdatePharmacieRoutingModule, PageHeaderModule, FormsModule
  ],
  declarations: [UpdatePharmacieComponent],
  providers: [PharmacieService, RegionService]
})
export class UpdatePharmacieModule { }

