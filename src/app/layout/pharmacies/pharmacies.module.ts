import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaciesRoutingModule } from './pharmacies-routing.module';
import { PageHeaderModule } from '../../shared';
import { PharmaciesComponent } from './pharmacies.component';
import { FormsModule } from '@angular/forms';
import { PharmacieService } from '../pharmacie.service';

@NgModule({
  imports: [
    CommonModule,  PharmaciesRoutingModule, PageHeaderModule, FormsModule
  ],
  declarations: [PharmaciesComponent],
  providers: [PharmacieService]
})
export class PharmaciesModule { }

