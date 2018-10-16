import { FormGroup } from '@angular/forms';
 
export class RegistrationValidator {

    static validate(registrationFormGroup: FormGroup) {
        
        
        let mdp= registrationFormGroup.controls.newpassword.value;
        let repeatPassword = registrationFormGroup.controls.confirmpassword.value;

      
 
        if (repeatPassword !== mdp) {
         return {
         doesMatchPassword: true
        };
       }

   
   

       
  

 
    }

    
}