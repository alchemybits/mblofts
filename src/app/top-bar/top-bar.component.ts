import { Component, OnInit } from '@angular/core';
import { LoftsService } from '../lofts.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  ids: number[] = [];

  constructor(private loftService: LoftsService) { }

 async ngOnInit() {
    await this.loftService.getLoftIDs().then( item => {
      return this.ids = item;
    });

    this.showMenu();
  }

  showMenu() {
    console.log('yei', this.ids);
  }

}
