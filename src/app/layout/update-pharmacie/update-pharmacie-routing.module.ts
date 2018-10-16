import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePharmacieComponent } from './update-pharmacie.component';



const routes: Routes = [
   
        {path: '',component: UpdatePharmacieComponent},
       
       
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdatePharmacieRoutingModule {}
