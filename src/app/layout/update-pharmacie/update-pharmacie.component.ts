import { Component, OnInit } from '@angular/core';
import { Region } from '../region.model';
import {Params, ActivatedRoute, Router } from '@angular/router';
import { PharmacieService } from '../pharmacie.service';
import { Pharmacie } from '../pharmacie.model';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-update-pharmacie',
  templateUrl: './update-pharmacie.component.html',
  styleUrls: ['./update-pharmacie.component.scss']
})
export class UpdatePharmacieComponent implements OnInit {
  currentRegion: any;
  pharmacieId: number;
  pharmacie: Pharmacie;
  regions: any;

  constructor(private route: ActivatedRoute, private router: Router,  private pharmacieService : PharmacieService, private regionService: RegionService) { }


  setNewRegion(region: Region): void {
    
    this.currentRegion = region;
    console.log(this.currentRegion);
    } 


    
   updatePharmacie(): void
   {


    this.pharmacieService.updatePharmacie(this.pharmacie)
    .subscribe ( data =>
    {
      alert("pharmacy updated successfully");
      this.router.navigate(['pharmacies'])
    }, err=> {

      alert("error occured")
    },
  () => {
    console.log(this.pharmacie);
  })
   }

    

  ngOnInit() {


    
    this.route.params.forEach((params: Params) => {
      this.pharmacieId = Number.parseInt(params['id']);
    });

    this.pharmacieService.getPharmacie(this.pharmacieId).subscribe(
      data => {
        this.pharmacie = data;
       console.log(this.pharmacie);
       
      
      },
      error => {
        console.log(error);
      }
    )

    this.regionService.getRegions()
    .subscribe(response=> { this.regions= response;
    console.log(response)});
    
   
    
  }

}
