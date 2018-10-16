import { Component, OnInit } from '@angular/core';
import { Pharmacie } from '../pharmacie.model';
import { PharmacieService } from '../pharmacie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pharmacie-detail',
  templateUrl: './pharmacie-detail.component.html',
  styleUrls: ['./pharmacie-detail.component.scss']
})
export class PharmacieDetailComponent implements OnInit {
  pharmacieId: number;
  pharmacie: Pharmacie;

  constructor(private pharmacieService: PharmacieService, private router : Router, private route: ActivatedRoute) { }

  deletePharmacie(pharmacie: Pharmacie): void {
    this.pharmacieService.deletePharmacie(pharmacie)
      .subscribe( data => {
        alert("pharmacie deleted successfully");
        this.router.navigate(['/pharmacies']);
  
      })
  }

  onSelect(){
    this.router.navigate(['update-pharmacie', this.pharmacie.id]);
  }

  ngOnInit() {


    
  this.route.params.forEach((params: Params) => {
    this.pharmacieId = Number.parseInt(params['id']);
  });

  this.pharmacieService.getPharmacie(this.pharmacieId)
   .subscribe( data => {
      this.pharmacie = data;
      
      console.log("********************************************************");
      console.log(this.pharmacie);
    },
    error => {
      console.log(error);
    }
  );
  
  
}


  }






