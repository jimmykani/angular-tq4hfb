import { Component } from '@angular/core';

import { products } from '../products';
import {CatDataService} from '../services/catDataService/catDataService';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent {
  products = products;

constructor(private catDataService: CatDataService) { }
  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/