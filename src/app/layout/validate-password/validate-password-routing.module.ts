import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidatePasswordComponent } from './validate-password.component';



const routes: Routes = [
   
        {path: '',component: ValidatePasswordComponent},
       
       
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ValidatePasswordRoutingModule {}
