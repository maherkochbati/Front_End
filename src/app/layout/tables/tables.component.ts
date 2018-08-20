import { Component} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Users} from '../users.model';
import { UsersService} from '../users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent {
    user: Users = new Users();

    constructor(private router: Router, private userService: UsersService) {
  
    }
  
    createUser(): void {
      this.userService.createUser(this.user)
          .subscribe( data => {
            alert("User created successfully.")
          })
  
    }
  
   
}
