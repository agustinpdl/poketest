import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  windowHeight:number = window.innerHeight/2;
  title = 'poketest';
  wavesNumber: number[] = [];
  constructor() {
    for (var i = 0; i <= 2; i++) {
      this.wavesNumber.push(i)
    }
  }
}
