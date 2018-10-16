import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';
import { AddPharmacieRoutingModule } from './add-pharmacie-routing.module';
import { AddPharmacieComponent } from './add-pharmacie.component';
import { PharmacieService } from '../pharmacie.service';
import { RegionService } from '../region.service';

@NgModule({
  imports: [
    CommonModule, AddPharmacieRoutingModule, PageHeaderModule, FormsModule
  ],
  
  declarations: [AddPharmacieComponent],
    providers: [PharmacieService, RegionService]
})
export class AddPharmacieModule { }
