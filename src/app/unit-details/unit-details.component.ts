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
  floorPlan: any = {
    picture: '',
    map: ''
  };
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
      console.log(this.id);
      this.loftService.getLoftById(this.id).then( item => {
        console.log(item);
        if (item) {
          this.loft = item;
          // tslint:disable-next-line: no-string-literal
          this.floorPlan.picture = this.loft.floorplans[0]['picture'];
          // tslint:disable-next-line: no-string-literal
          this.floorPlan.map = this.loft.floorplans[0]['map'];

        }
      });
    });

    this.showPicture(0, null);
    this.hightlightStatus = [true, false];



  }

  showPicture(index, e) {
    // tslint:disable-next-line: no-string-literal
    this.floorPlan.picture = this.loft.floorplans[index]['picture'];
    // tslint:disable-next-line: no-string-literal
    this.floorPlan.map = this.loft.floorplans[index]['map'];

    index === 0 ? this.hightlightStatus = [true, false] : this.hightlightStatus = [false, true];

  }

}
