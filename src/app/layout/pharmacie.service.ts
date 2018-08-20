import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import {  Response} from '@angular/http';

@Injectable()
export class PharmacieService {

  constructor( private http: Http ) { }

  private getUrl = 'http://localhost:8181/pharmacie/listPharmacie';

  public getPharmacies() {

  let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));

    return this.http.get(this.getUrl, {headers: headers})
    .map( (response: Response) => response.json());
}
}
