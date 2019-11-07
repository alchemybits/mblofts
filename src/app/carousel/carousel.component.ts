import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { of } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {

  @Input() pictures: any[];

  selectedPicture = '0';
  picturePosition = 1;
  half = 0;
  constructor() { }

  ngOnInit() {



  }

  getPositionInArrayById(id) {
    console.log('array of pictures', this.pictures);
    const object = _.findIndex(this.pictures, ['id', id]);
    this.jump(object);

    console.log('this is pobject with id = ', object);
  }

  jump(index) {
    let ans = this.half - index;
    if (ans > 0) {
      for (let x = 0; x < ans; x++) {
        this.previous(this.pictures);
      }
    }
    if (ans < 0) {
      ans *= -1;
      for (let x = 0; x < ans; x++) {
        this.next(this.pictures);
      }
    }
    // this.selectedPicture = this.pictures[index].picture;
  }

  next(arr) {
    const temp = arr[0];
    for (let i = 0; i < arr.length; i ++) {
      if (i === arr.length - 1) {
      arr[i] = temp;
      } else {
      arr[i] = arr[i + 1];
      }
    }

    this.selectedPicture = arr[this.half].picture;
  }

  previous(arr) {
    const temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i --) {
      if (i === 0) {
        arr[0] = temp;
      } else {
        arr[i] = arr[i - 1];
      }
    }

    this.selectedPicture = arr[this.half].picture;
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentItem: SimpleChange = changes.pictures;
    console.log('prev value: ', currentItem.previousValue);
    console.log('got item: ', currentItem.currentValue);
    if (currentItem.currentValue) {
      console.log('REAL VALUE HJERE!', currentItem.currentValue);
      this. half = Math.round(this.pictures.length / 2 );
      this.half--;
      console.log('thius is half', this.half);

      this.selectedPicture = currentItem.currentValue[this.half].picture;
    }

  }

}
