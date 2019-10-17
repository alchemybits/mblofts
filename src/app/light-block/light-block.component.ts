import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-light-block',
  templateUrl: './light-block.component.html',
  styleUrls: ['./light-block.component.scss']
})
export class LightBlockComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
