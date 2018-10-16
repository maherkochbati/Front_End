import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';






@Injectable()
export class ChangePasswordGuard implements CanActivate {

   

    constructor() {}
    

      
    canActivate() {

      if (window.sessionStorage.getItem("comparison") == "true")
      {
        console.log("authorized");
        return true;
      } 
else{
  
  console.log("unauthorized");  
  return false;
}

       
        
      

   
    }
  }
