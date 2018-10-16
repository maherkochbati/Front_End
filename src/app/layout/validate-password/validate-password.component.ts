import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../change-password/change-password.service';
import { OldPassword } from '../oldpassword.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-password',
  templateUrl: './validate-password.component.html',
  styleUrls: ['./validate-password.component.scss']
})
export class ValidatePasswordComponent implements OnInit {

  y: OldPassword = new OldPassword();
  mode: number ;
  constructor(private router: Router, private changePasswordService: ChangePasswordService) { }

  OldPasswordTest()
  {

    this.changePasswordService.verifyOldPassword(this.y).subscribe(
      data =>
      {
 
        console.log(data);
        console.log("Résultat du comparaison", data.text());
        sessionStorage.setItem("comparison",data.text());
        if(data.text()=="true")
        {
          this.router.navigate(['/change-password'])
        }
        else{
          this.mode=1;
          
          

        }

      
        
      }
  
    );

  }
  ngOnInit() {
  }

}
