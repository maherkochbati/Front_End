import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Users } from '../users.model';
import { routerTransition} from '../../router.animations';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [routerTransition()]

})
export class UserDetailComponent implements OnInit {
  user: Users;
  userId: number;
  constructor( private userService: UsersService, private router: Router , private route: ActivatedRoute) {
   }

   onSelect(){
     this.router.navigate(['update-user', this.user.id]);
   }

   deleteUser(user: Users): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        confirm("user deleted successfully");
        this.router.navigate(['/users']);

      })
  }

  ngOnInit() {
    
    this.route.params.forEach((params: Params) => {
      this.userId = Number.parseInt(params['id']);
    });

    this.userService.getUser(this.userId).subscribe(
      data => {
        this.user = data;
        
        console.log("********************************************************");
        console.log(this.user.role.libelle);
      },
      error => {
        console.log(error);
      }
    )
    
    
  }
  
 
    
  }


