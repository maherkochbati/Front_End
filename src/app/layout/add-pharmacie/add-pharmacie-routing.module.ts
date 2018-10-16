import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPharmacieComponent } from './add-pharmacie.component';



const routes: Routes = [
   
        {path: '',component: AddPharmacieComponent},
       
       
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddPharmacieRoutingModule {}
