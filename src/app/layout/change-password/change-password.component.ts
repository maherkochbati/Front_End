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

  x: Password = new Password();
  
  
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  user: any;

  
  constructor( private formBuilder: FormBuilder, private changePasswordService: ChangePasswordService) {
    this.passwordFormGroup = this.formBuilder.group({
    newpassword: ['', Validators.required],
    confirmpassword: ['', Validators.required]}, {
      validator: RegistrationValidator.validate.bind(this)
    }
    );

    this.registrationFormGroup = this.formBuilder.group({
      passwordFormGroup: this.passwordFormGroup} ,
  
  
    );

   
  
  
  }



  

  changePassword()
  {
    this.changePasswordService.sendCredential(this.x).subscribe(
      data => {
        this.user=data;
        console.log(this.user);
        alert("Password changed successfully");
        window.sessionStorage.setItem("comparison", "false");
      },
      error => {
        console.log(error);
        
      });
  
  }



   
  
  ngOnInit() {
    

  }

}
