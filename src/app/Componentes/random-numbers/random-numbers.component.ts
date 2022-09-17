import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.css'],
})
export class RandomNumbersComponent implements OnInit {
  constructor() {}
  shuffledArray: [];

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
