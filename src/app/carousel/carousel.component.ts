import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {

  @Input() pictures: any[];
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    const currentItem: SimpleChange = changes.pictures;
    console.log('prev value: ', currentItem.previousValue);
    console.log('got item: ', currentItem.currentValue);
    if (currentItem.currentValue) {
      console.log('REAL VALUE HJERE!', currentItem.currentValue);
    }

  }

}
