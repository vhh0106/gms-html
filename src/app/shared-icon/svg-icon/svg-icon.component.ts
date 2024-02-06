import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() icon: string = '';
  @Input() svgStyle: { [p: string]: string } = {
    height: '1.5rem', width: '1.5rem'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
