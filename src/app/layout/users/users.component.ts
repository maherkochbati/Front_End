import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

  
  user: Users;
  selectedUser : any;
  nom : string;
  prenom : string;
  id: number;

  users: any[];
  
  profil: any;
  count: any;
 

  constructor(public router: Router, private userService: UsersService) {

  }

  
  deleteUser(user: Users): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
        alert("user deleted successfully")
      })
  }

  onSelect(user : any){
    this.selectedUser = user;
    this.router.navigate(['user-detail', this.selectedUser.id]);

  }
  
  public goAdd(){

    this.router.navigate(['add-user']);
  }
  

  getUsersByNomAndPrenom() : void 
  {
    this.userService.getUsersByNomAndPrenom(this.nom, this.prenom)
    .subscribe( data =>
    {
     this.users= data;
     console.log(this.users);
    })


  }
  
  getUsersByProfil() : void 
  {
    this.userService.getUsersByProfil(this.profil)
    .subscribe( data =>
    {
     this.users= data;
     console.log(this.users);
    })


  }


  getUsers() : void 
  {
    this.userService.getUsers()
    .subscribe( data =>
    {
     this.users= data;
     console.log(this.users);
    })


  }
  
  getUserById() : void 
  {

    this.userService.getUser(this.id)
    .subscribe( data =>
    {
      this.users= [];
      this.users.push(data);

    })


  }

  
  ngOnInit() : void {
    this.userService.getUsers()
    .subscribe(response=> { this.users= response,

      console.log(response);
    }
    

      
    );

    
     
   
}
}
