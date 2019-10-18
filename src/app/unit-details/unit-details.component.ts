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
  hightlightStatus: Array<boolean> = [true, false];

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

        }
      });
    });



  }

  showPicture(index, e) {
    // tslint:disable-next-line: no-string-literal
    this.floorPlan = this.loft.floorplans[index]['picture'];

    index === 0 ? this.hightlightStatus = [true, false] : this.hightlightStatus = [false, true];

  }

}
