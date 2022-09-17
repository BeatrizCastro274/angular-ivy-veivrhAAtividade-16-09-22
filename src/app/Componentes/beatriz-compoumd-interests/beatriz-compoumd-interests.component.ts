import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beatriz-compoumd-interests',
  templateUrl: './beatriz-compoumd-interests.component.html',
  styleUrls: ['./beatriz-compoumd-interests.component.css'],
})
export class BeatrizCompoumdInterestsComponent implements OnInit {
  constructor() {}
  @Input() c: string;
  @Input() i: string;
  @Input() t: string;

  ngOnInit() {}

  getComposto() {
    return Number(this.c) * (Number(this.i) * Number(this.t)) * Number(this.t);
  }
}
