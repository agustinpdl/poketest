import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss']
})
export class WaveComponent {
  @Input() public isOdd: boolean = true;
  @Input() public isbottom: boolean = false;
  @Input() public id: string = '';

  @Input() public height: number = 10;


}
