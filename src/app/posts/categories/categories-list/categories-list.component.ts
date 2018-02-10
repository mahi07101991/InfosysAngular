import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../categories.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  @Input() category: Categories[];
  constructor() { }

  ngOnInit() {
  }

}
