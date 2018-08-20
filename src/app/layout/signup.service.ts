import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import { Response} from '@angular/http';

@Injectable()
export class SignUpService {


  constructor( private http: Http ) { }

  private getRoleUrl = 'http://localhost:8181/role/listRole/inscription';

  public getRoles() {

  

    return this.http.get(this.getRoleUrl)
    .map( (response: Response) => response.json());
}

private getPharmacieUrl = 'http://localhost:8181/pharmacie/listPharmacie/inscription';

public getPharmacies() {



  return this.http.get(this.getPharmacieUrl)
  .map( (response: Response) => response.json());
}

private CreateUrlInscription= 'http://localhost:8181/user/create/inscription';

public createUser(user) {

  return this.http.post(this.CreateUrlInscription, user)
  .map((response: Response) => response.json());
}


}
