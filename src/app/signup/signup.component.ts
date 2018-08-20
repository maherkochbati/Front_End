import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {UsersService } from '../layout/users.service';
import { Router } from '@angular/router';
import { Users } from '../layout/users.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pharmacie } from '../layout/pharmacie.model';
import { Role } from '../layout/role.model';
import { RegistrationValidator } from './register.validator';
import { SignUpService } from '../layout/signup.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    user: Users = new Users();
    roles: any;
    pharmacies: any;
    registrationFormGroup: FormGroup;
    passwordFormGroup: FormGroup;
  currentRole: Role;
  currentPharmacie: Pharmacie;

    constructor(public userService: UsersService, public router:Router,  private formBuilder: FormBuilder,  public signupService: SignUpService) {

      this.passwordFormGroup = this.formBuilder.group({
        mdp: ['', Validators.required],
        repeatPassword: ['', Validators.required]
      }, {
        validator: RegistrationValidator.validate.bind(this)
      });
      this.registrationFormGroup = this.formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])],
        role: ['', Validators.required],
        pharmacie: ['', Validators.required],
        passwordFormGroup: this.passwordFormGroup
            


      });


    }

    setNewRole(role: Role): void {
    
      console.log(role);
      this.currentRole = role;
      }

      setNewPharmacie(pharmacie: Pharmacie): void {
    
        console.log(pharmacie);
        this.currentPharmacie = pharmacie;
        }

    createUser(): void {
        this.signupService.createUser(this.user)
            .subscribe( response => {
              alert("Your account is created successfully");
              console.log(this.user)
              this.router.navigate(['/login']);


            });
    
      }
    
        
     
 
  
      
    ngOnInit() {

      this.signupService.getRoles()
    .subscribe(response=> { this.roles= response;
    console.log(response)});

    this.signupService.getPharmacies()
    .subscribe(response=> { this.pharmacies= response;
    console.log(response)});

  }
      
    

        
    
}
