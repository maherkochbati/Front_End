import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import {  Response} from '@angular/http';
import { Pharmacie } from './pharmacie.model';

@Injectable()
export class PharmacieService {

  constructor( private http: Http ) { }

  private createUrl = 'http://localhost:8181/pharmacie/create';
  private getUrl = 'http://localhost:8181/pharmacie/listPharmacie';
  private deleteUrl = 'http://localhost:8181/pharmacie/delete';
  private updateUrl = 'http://localhost:8181/pharmacie/update';
   private findUrl= 'http://localhost:8181/pharmacie/find'

   private host:string="http://localhost:8181";

  public getPharmacies() {

  let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));

    return this.http.get(this.getUrl, {headers: headers})
    .map( (response: Response) => response.json());
}



public getPharmacieByNom( nom : string) {
    
  let headers = new Headers();
  
   console.log(window.sessionStorage.getItem('AuthToken'));
    
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
   
      return this.http.get(this.host+ "/pharmacie/findbynom/" +  nom, {headers: headers})
      .map((response: Response) => response.json());
    
}

public getPharmacieByRegion( region: string) {
    
  let headers = new Headers();
  
   console.log(window.sessionStorage.getItem('AuthToken'));
    
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
   
      return this.http.get(this.host+ "/pharmacie/findbyregion/" + region , {headers: headers})
      .map((response: Response) => response.json());
    
}





  public deletePharmacie(pharmacie) {
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
    return this.http.delete(this.deleteUrl + "/" + pharmacie.id, {headers: headers});
  }

  public getPharmacie(id: number) {
   
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
    return this.http.get(this.findUrl + "/"+ id, {headers: headers})
    .map((response: Response) => response.json());
    
    

  }
  
  updatePharmacie(pharmacie: Pharmacie) {
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));

    return this.http.put(this.updateUrl + "/" + pharmacie.id, pharmacie, {headers: headers})
    .map((response: Response) => response.json());
    
}

  public createPharmacie(pharmacie) {
    let headers = new Headers();
  
    
     
    headers.append('Authorization', 'Bearer '+ window.sessionStorage.getItem('AuthToken'));
    return this.http.post(this.createUrl, pharmacie, {headers: headers})
    .map((response: Response) => response.json());
  }
 
}
