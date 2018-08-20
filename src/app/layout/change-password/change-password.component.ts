import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationValidator } from './register.validator';

import { ChangePasswordService } from './change-password.service';
import { Password } from '../password.model';
import { AuthService } from '../../login/auth.service';
import { OldPassword } from '../oldpassword.model';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  oldpassword : string;
  x: Password = new Password();
  y: OldPassword = new OldPassword();
  
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  user: any;
  test: any;
  
  constructor( private formBuilder: FormBuilder, private changePasswordService: ChangePasswordService, private AuthService:AuthService) {
  
    this.passwordFormGroup = this.formBuilder.group({
    newpassword: ['', Validators.required],
    confirmpassword: ['', Validators.required]}, {
      validator: RegistrationValidator.validate.bind(this)
    }
    );

    this.registrationFormGroup = this.formBuilder.group({
      oldpassword: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup} ,
  
  
    );

   
  
  
  }



  

  changePassword()
  {
    this.changePasswordService.sendCredential(this.x).subscribe(
      data => {
        this.user=data;
        console.log(this.user);
      },
      error => {
        console.log(error);
        
      });
  
  }

  OldPasswordTest()
  {

    this.changePasswordService.verifyOldPassword(this.y).subscribe(
      data =>
      {
 
        this.test= data;
        console.log(this.test);
        console.log("Résultat du comparaison", data.text());
        sessionStorage.setItem("comparison",data.text());
       
      }
  
    );
  }

   
  
  ngOnInit() {

  
  }

}
