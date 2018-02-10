import { Component, OnInit } from '@angular/core';
import { Categories } from './categories.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[] = [ 
    new Categories('Recipes',10),
    new Categories('Travel',5),
    new Categories('Technologies',3),
    new Categories('Countries',12),
    new Categories('Housing',30)

  ];
  constructor() { }

  ngOnInit() {
  }

}
