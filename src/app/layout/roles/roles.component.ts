import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: any ;

  constructor( public router: Router, private roleService: RoleService) { }

  ngOnInit() {

    this.roleService.getRoles()
    .subscribe(response=> { this.roles= response;
    console.log(response)});
  }

}
