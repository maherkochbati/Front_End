import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacieDetailRoutingModule } from './pharmacie-detail-routing.module';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';
import { PharmacieDetailComponent } from './pharmacie-detail.component';
import { PharmacieService } from '../pharmacie.service';

@NgModule({
  imports: [
    CommonModule,  PharmacieDetailRoutingModule, PageHeaderModule, FormsModule
  ],
  declarations: [PharmacieDetailComponent],
  providers: [PharmacieService]
})
export class PharmacieDetailModule { }

