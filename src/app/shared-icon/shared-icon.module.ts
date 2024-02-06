import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import {AngularSvgIconModule} from "angular-svg-icon";



@NgModule({
  declarations: [
    SvgIconComponent
  ],
  exports: [
    SvgIconComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ]
})
export class SharedIconModule { }
