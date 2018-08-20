import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../layout/users.model';

import { Http, Headers, Response } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
   user: Users;
   users: any;
   jwtToken = null;
   
   private host:string="http://localhost:8181";
  constructor(private http: HttpClient, private httpp:Http) { }


  setLoggedin(){
    window.sessionStorage.removeItem("loggedin");
    window.sessionStorage.setItem("loggedin", "true");
  }

  setLoggedOut(){
    window.sessionStorage.removeItem("loggedin");
    window.sessionStorage.setItem("loggedin", "false");
  }

  getLoggedin(){
    return window.sessionStorage.getItem("loggedin");
  }

  loadToken(){
    this.jwtToken=window.sessionStorage.getItem(TOKEN_KEY);
  }


  getCurrentUser(){
    let token = window.sessionStorage.getItem(TOKEN_KEY);
    
    let jwtHelper =new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }
  
  
  getUserAllData(){
  let headers = new Headers();

  
   
   headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
    if(this.jwtToken==null) this.loadToken();
    this.users=this.getCurrentUser();
    
    return this.httpp.get(this.host+"/user/finduser/"+ this.users.sub ,{headers: headers})
    .map((response: Response) => response.json());
  }

  sendCredential(username: string, password: string): Observable<any> {
    
    const credentials = {username: username, password: password};
    console.log('Connexion ::');
    return this.http.post<any>('http://localhost:8181/token/generate-token', credentials)
    
  }

  check(){
   console.log('check test :');
    return this.http.get('http://localhost:8080/check');
  }




}
