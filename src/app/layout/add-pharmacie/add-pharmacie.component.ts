import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router } from '@angular/router';
import { PharmacieService } from '../pharmacie.service';
import { Pharmacie } from '../pharmacie.model';
import { Region } from '../region.model';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-add-pharmacie',
  templateUrl: './add-pharmacie.component.html',
  styleUrls: ['./add-pharmacie.component.scss'],
  animations: [routerTransition()]
})
export class AddPharmacieComponent  implements OnInit {

  pharmacie: Pharmacie = new Pharmacie();
  currentRegion: Region;
  regions: any;
  test: any;
  
 
  
  constructor(private router: Router, private pharmacieService: PharmacieService, private regionService: RegionService) {

  }

  createPharmacie(): void {

  
    this.pharmacieService.createPharmacie(this.pharmacie)
        .subscribe( data => {

          
          alert("Pharmacy created successfully.");
          this.router.navigate(['/pharmacies'])
          

        });
    console.log(this.pharmacie)

  };


  setNewRegion(region: Region): void {
    
    console.log(region);
    this.currentRegion = region;
    }
  


  
  ngOnInit()
  {
    this.regionService.getRegions()
    .subscribe(response=> { this.regions= response;
    console.log(response)});
  
    
  }
}
