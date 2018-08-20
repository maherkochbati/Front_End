import { Component, OnInit, OnDestroy } from '@angular/core';
import { Users } from '../users.model';
import { ActivatedRoute ,Params,  Router} from '@angular/router';
import { UsersService } from '../users.service';
import { RoleService } from '../role.service';
import { PharmacieService } from '../pharmacie.service';
import { Pharmacie } from '../pharmacie.model';
import { Role } from '../role.model';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent{

  
  user: Users= new Users();
  userId: number;
  roles: any;
  pharmacies:any;
  currentRole: Role;
  currentPharmacie: Pharmacie;
  pharmaciess: any;
  constructor(public UserService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
            public roleService:RoleService,
            public pharmacieService: PharmacieService) {


   };

   setNewRole(role: Role): void {
    
    console.log(role);
    this.currentRole = role;
    }
  

    setNewPharmacie(pharmacie: Pharmacie): void {
  
      console.log(pharmacie);
      this.currentPharmacie = pharmacie;
      
      }
 
  getPharmacies() : void{

    this.pharmacieService.getPharmacies()
    .subscribe(response=> { this.pharmacies= response;
    console.log(response)}
    , error => {
    console.log(error);
    });

  }

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      this.userId = Number.parseInt(params['id']);
    });

    this.UserService.getUser(this.userId).subscribe(
      data => {
        this.user = data;
       
       
      
      },
      error => {
        console.log(error);
      }
    )

    this.roleService.getRoles()
    .subscribe(response=> { this.roles= response;
    console.log(response)});
    
    this.pharmacieService.getPharmacies()
    .subscribe(response=> { this.pharmacies= response;
    console.log(response)});
    
    
  }
    
   updateUser(): void
   {

    console.log(this.user.pharmacie);

    this.UserService.updateUser(this.user)
    .subscribe ( data =>
    {
      alert("user updated successfully");
      this.router.navigate(['users'])
    }, err=> {

      alert("error occured")
    },
  () => {
    console.log(this.user);
  })
   }
   
  
 

  

}