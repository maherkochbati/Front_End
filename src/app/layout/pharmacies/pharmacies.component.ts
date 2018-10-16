import { Component, OnInit } from '@angular/core';
import { PharmacieService } from '../pharmacie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent implements OnInit {
 
  pharmacies: any[];

  id: number;
  nom: any;
  region: any;
  selectedPharmacie: any;

  constructor(private pharmacieService: PharmacieService , private router: Router) { }


  onSelect(pharmacie : any){
    this.selectedPharmacie = pharmacie;
    this.router.navigate(['pharmacie-detail', this.selectedPharmacie.id]);

  }

  getPharmacies() : void 
  {
    this.pharmacieService.getPharmacies()
    .subscribe( data =>
    {
     this.pharmacies= data;
     console.log(this.pharmacies);
    })


  }

  getPharmacieByNom() : void 
  {
    this.pharmacieService.getPharmacieByNom(this.nom)
    .subscribe( data =>
    {
      this.pharmacies= [];
      this.pharmacies.push(data);
     console.log(this.pharmacies);
    })


  }

  getPharmacieByRegion() : void 
  {
    this.pharmacieService.getPharmacieByRegion(this.region)
    .subscribe( data =>
    {
      this.pharmacies= data;
     console.log(this.pharmacies);
    })


  }

  public goAdd(){

    this.router.navigate(['add-pharmacie']);
  }
  
  getPharmacieById() : void 
  {

    this.pharmacieService.getPharmacie(this.id)
    .subscribe( data =>
    {
      this.pharmacies= [];
      this.pharmacies.push(data);
    });

    


  }
  ngOnInit() : void {
    this.pharmacieService.getPharmacies()
    .subscribe(response=> { this.pharmacies= response,

      console.log(response);
    });
  }
}
