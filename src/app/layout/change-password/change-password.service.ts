import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Http , Headers} from '@angular/http';
import { Password } from '../password.model';
import { OldPassword } from '../oldpassword.model';


@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  users: any;
  
  
  constructor(private http: Http) { }
  sendCredential(password : Password) : Observable<any> {
    let headers = new Headers();
  
    
     
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));

    return this.http.post('http://localhost:8181/user/savePassword',password, {headers: headers});
   
    

    
    
  }
 
 

 verifyOldPassword(password: OldPassword)
 {

  let headers = new Headers();
  
    
     
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
  return this.http.post('http://localhost:8181/user/password', password, {headers: headers});


 }
}
