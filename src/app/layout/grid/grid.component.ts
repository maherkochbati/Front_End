import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Router } from '@angular/router';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()],
    
})
export class GridComponent implements OnInit {
   ngOnInit() {}
}
