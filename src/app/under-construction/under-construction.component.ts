import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'MANHATTAN BEACH LOFTS';
  }

}
