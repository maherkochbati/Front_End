import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
//import { Interceptor } from './interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule],
    providers: [ AuthService],
        
        //{provide: HTTP_INTERCEPTORS,
        //useClass: Interceptor,
        //multi : true} ],
    declarations: [LoginComponent]
})
export class LoginModule {}
