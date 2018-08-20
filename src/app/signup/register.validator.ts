import { FormGroup } from '@angular/forms';
 
export class RegistrationValidator {
    static validate(registrationFormGroup: FormGroup) {
        let mdp= registrationFormGroup.controls.mdp.value;
        let repeatPassword = registrationFormGroup.controls.repeatPassword.value;
 
       
 
        if (repeatPassword !== mdp) {
            return {
                doesMatchPassword: true
            };
        }
 
        return null;
 
    }
}