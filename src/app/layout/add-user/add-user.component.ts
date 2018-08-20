import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Users} from '../users.model';
import {UsersService} from '../users.service';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
import { PharmacieService } from '../pharmacie.service';
import { Role } from '../role.model';
import { Pharmacie } from '../pharmacie.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  animations: [routerTransition()]
})
export class AddUserComponent  implements OnInit {

  user: Users = new Users();
  roles: any;
  pharmacies: any; 
  
 
  
  currentRole: Role;
  currentPharmacie: Pharmacie;
 
  
  constructor(private router: Router, private userService: UsersService, public roleService: RoleService, public pharmacieService: PharmacieService) {

  }

  createUser(): void {

    
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
          this.router.navigate(['/users'])
        });
    console.log(this.user)

  };

  setNewRole(role: Role): void {
    
      console.log(role);
      this.currentRole = role;
      }
    
  
      setNewPharmacie(pharmacie: Pharmacie): void {
    
        console.log(pharmacie);
        this.currentPharmacie = pharmacie;
        }
      
 
  ngOnInit(){

    this.roleService.getRoles()
    .subscribe(response=> { this.roles= response;
    console.log(response)});

    this.pharmacieService.getPharmacies()
    .subscribe(response=> { this.pharmacies= response;
    console.log(response)});
   
  }
}
