import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';






@Injectable()
export class AuthGuard implements CanActivate {

   

    constructor(private router: Router) {}
    

      
    canActivate() {

      if (window.sessionStorage.getItem("ROLE") == "Administrateur"){
        console.log("authorized");
        return true;
      } 
else{
  this.router.navigate(['/login']); 
  console.log("unauthorized");  
  return false;
}

       
        
      

   
    }
  }
