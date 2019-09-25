import { Component, OnInit, Input } from '@angular/core';
import { Loft } from 'src/shared/loft';
import { ActivatedRoute } from '@angular/router';
import { LoftsService } from '../lofts.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss']
})
export class UnitDetailsComponent implements OnInit {
  id: string;
  loft: Loft = new Loft();
  ids: number[];
  floorPlan: string;

  constructor(private route: ActivatedRoute, private loftService: LoftsService) {
    this.id = '28';
   }

   async ngOnInit() {

    await this.loftService.getLoftIDs().then( item => {
      return this.ids = item;
    });

    await this.route.paramMap.subscribe(obj => {
      // tslint:disable-next-line: no-string-literal
      this.id = obj['params'].id;
      this.loftService.getLoftById(this.id).then( item => {
        if (item) {
          this.loft = item;
          // tslint:disable-next-line: no-string-literal
          this.floorPlan = this.loft.floorplans[0]['picture'];

          console.log('pictures', this.loft.pictures[0]);
        }
      });
    });



  }

  showPicture(index) {
    // tslint:disable-next-line: no-string-literal
    this.floorPlan = this.loft.floorplans[index]['picture'];
  }

}
