import {Injectable} from '@angular/core';

import {Users} from './users.model'

import 'rxjs/add/operator/map';
import {Headers, Http} from '@angular/http';
import 'rxjs';

import {  Response} from '@angular/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorage} from '../login/token.storage';
const TOKEN_KEY = 'AuthToken';

@Injectable()
export class UsersService {
  headers: any;
  users: any;

 

  selectedID : number;
  
  private createUrl = 'http://localhost:8181/user/create';
  private getUrl = 'http://localhost:8181/user/listUser';
  private deleteUrl = 'http://localhost:8181/user/delete';
  private updateUrl = 'http://localhost:8181/user/update';
   private findUrl= 'http://localhost:8181/user/find'

   private host:string="http://localhost:8181";

  private jwtToken=null; 

  constructor( private http: Http) {}
  public getUsers() {
    
  let headers = new Headers();
  
   console.log(window.sessionStorage.getItem('AuthToken'));
    
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
   
      return this.http.get(this.getUrl, {headers: headers})
      .map((response: Response) => response.json());
    
}


public getUsersByNomAndPrenom( nom : string, prenom: string) {
    
  let headers = new Headers();
  
   console.log(window.sessionStorage.getItem('AuthToken'));
    
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
   
      return this.http.get(this.host+ "/user/finduserr/" +  nom+ "/"+ prenom , {headers: headers})
      .map((response: Response) => response.json());
    
}

public getUsersByProfil( profil: string) {
    
  let headers = new Headers();
  
   console.log(window.sessionStorage.getItem('AuthToken'));
    
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
   
      return this.http.get(this.host+ "/user/finduserbylibelle/" + profil  , {headers: headers})
      .map((response: Response) => response.json());
    
}


public getUserById( id : number) {
    
  let headers = new Headers();
  
   console.log(window.sessionStorage.getItem('AuthToken'));
    
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
   
      return this.http.get(this.host+ "/user/finduserbyId/" + id  , {headers: headers})
      .map((response: Response) => response.json());
    
}


  public deleteUser(user) {
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
    return this.http.delete(this.deleteUrl + "/" + user.id, {headers: headers});
  }

  public getUser(id: number) {
   
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
    return this.http.get(this.findUrl + "/"+ id, {headers: headers})
    .map((response: Response) => response.json());
    
    

  }
  
  updateUser(user: Users) {
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));

    return this.http.put(this.updateUrl + "/" + user.id, user, {headers: headers})
    .map((response: Response) => response.json());
    
}

  public createUser(user) {
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
    return this.http.post(this.createUrl, user, {headers: headers})
    .map((response: Response) => response.json());
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
      
      return this.http.get(this.host+"/user/finduser/"+ this.users.sub ,{headers: headers})
      .map((response: Response) => response.json());
    }
    
}

