import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('ref') public ref!: ElementRef;
  title = 'poketest';
  public windowHeight!: number;
  public wavesNumber: number[] = [];
  public waveHeight = 0;
  private _numberOfWaves = 4;
  constructor() {
    // create an Observer instance
    this._calcVariables();

    const resizeObserver = new ResizeObserver(() => {
      this._calcVariables();
    }
    )

    // start observing a DOM node
    resizeObserver.observe(document.body);
  }

  private _calcVariables() {
    this.windowHeight = (window.innerHeight+window.screen.availHeight) / 4;
    this.waveHeight = this.windowHeight / this._numberOfWaves;
    console.log(this.waveHeight)
    for (var i = 1; i <= this._numberOfWaves; i++) {
      this.wavesNumber.push(i)
    }
  }

}
