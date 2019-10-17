import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-block',
  templateUrl: './dark-block.component.html',
  styleUrls: ['./dark-block.component.scss']
})
export class DarkBlockComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
