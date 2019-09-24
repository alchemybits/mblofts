import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loft',
  templateUrl: './loft.component.html',
  styleUrls: ['./loft.component.scss']
})
export class LoftComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = '28';
   }

  ngOnInit() {

    this.route.paramMap.subscribe(obj => {
      // tslint:disable-next-line: no-string-literal
      this.id = obj['params'].id;
    });

  }

}
