import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoftsService } from '../lofts.service';
import { Loft } from 'src/shared/loft';

@Component({
  selector: 'app-loft',
  templateUrl: './loft.component.html',
  styleUrls: ['./loft.component.scss']
})
export class LoftComponent implements OnInit {
  id: string;
  loft: Loft;

  constructor(private route: ActivatedRoute, private loftService: LoftsService) {
    this.id = '28';
   }

   async ngOnInit() {
    await this.route.paramMap.subscribe(obj => {
      // tslint:disable-next-line: no-string-literal
      this.id = obj['params'].id;
    });

    await this.loftService.getLoftById(this.id).then( item => {
      this.loft = item;
    });

  }

}
