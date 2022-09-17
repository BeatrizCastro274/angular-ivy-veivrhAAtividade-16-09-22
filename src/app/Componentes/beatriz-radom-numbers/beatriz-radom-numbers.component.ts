import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beatriz-radom-numbers',
  templateUrl: './beatriz-radom-numbers.component.html',
  styleUrls: ['./beatriz-radom-numbers.component.css'],
})
export class BeatrizRadomNumbersComponent implements OnInit {
  constructor() {}

  shuffledArray: [];
  @Input() m: string;
  shuffleArray(array) {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
  ngOnInit() {}
}
