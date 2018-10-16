import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacieDetailComponent } from './pharmacie-detail.component';



const routes: Routes = [
   
        {path: '',component: PharmacieDetailComponent},
       
       
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PharmacieDetailRoutingModule {}
