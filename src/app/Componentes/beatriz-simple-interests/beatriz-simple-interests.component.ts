import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beatriz-simple-interests',
  templateUrl: './beatriz-simple-interests.component.html',
  styleUrls: ['./beatriz-simple-interests.component.css'],
})
export class BeatrizSimpleInterestsComponent implements OnInit {
  constructor() {}
  @Input() c: string;
  @Input() i: string;
  @Input() t: string;

  ngOnInit() {}

  getSimples() {
    return Number(this.c) * Number(this.i) * Number(this.t);
  }
}
