import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-picture',
  templateUrl: './main-picture.component.html',
  styleUrls: ['./main-picture.component.scss']
})
export class MainPictureComponent implements OnInit {

  @Input() title: string;
  @Input() picture: string;
  @Input() subtitle: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
