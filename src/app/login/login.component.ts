import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from './auth.service';
import { TokenStorage } from './token.storage';
import { Users } from '../layout/users.model';
import { AuthGuard } from '../shared';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private credential = {'username':'', 'password' : ''};

  mode: number =0;
  unauthorized: number =0;

  

  constructor(private authService: AuthService, private router: Router, private token: TokenStorage
) { }

  username : string;
  password : string;

  user : Users;

  login(): void {
   
    this.authService.sendCredential(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log(this.token.getToken());      
        
      },
      error => {
        console.log(error);

        this.mode=1;
        this.unauthorized=0;

      },
      () => {
        this.authService.getUserAllData().subscribe(
          data => {
            this.user = data;
            
            sessionStorage.setItem("ROLE", this.user.role.libelle);
            sessionStorage.setItem("comparison", "false");

            if(this.user.role.libelle != "Administrateur")
            {
             this.unauthorized=1;
             this.mode=0;
            }
            console.log(sessionStorage.getItem("ROLE"));
            

            this.router.navigate(['/dashboard']);
          }
        )
      }
    )
  }
    

  ngOnInit() {
    
   
  }

}
