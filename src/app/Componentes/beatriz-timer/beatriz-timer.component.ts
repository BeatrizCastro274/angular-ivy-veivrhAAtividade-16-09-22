import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beatriz-timer',
  templateUrl: './beatriz-timer.component.html',
  styleUrls: ['./beatriz-timer.component.css'],
})
export class BeatrizTimerComponent implements OnInit {
  constructor() {}

  crono = 0;
  minuto = 0;
  timer = setInterval(() => {
    if (this.crono < 60) {
      this.crono = this.crono + 1;
    } else {
      this.minuto++;
      this.crono = 0;
    }
  }, 1000);

  ngOnInit() {}
}
