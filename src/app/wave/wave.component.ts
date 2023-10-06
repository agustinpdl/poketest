import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss']
})
export class WaveComponent implements OnChanges {

  @Input() public isOdd: boolean = true;
  @Input() public id: string = '';

  @Input() public waveHeight: number = 10;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
