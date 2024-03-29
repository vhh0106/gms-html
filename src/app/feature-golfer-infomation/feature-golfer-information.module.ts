import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {SharedFieldsModule} from "../shared-field/shared-fields.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {GolferInformationComponent} from "./golfer-information/golfer-information.component";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: GolferInformationComponent,
        data: {breadcrumb: 'golfer-information'},
      }
    ]),
    NzIconModule,
    NzInputModule,
    NzCheckboxModule,
    NzDividerModule,
    NzAvatarModule,
    NzCardModule,
    NzDatePickerModule,
    SharedFieldsModule,
    NzLayoutModule,
    NzDropDownModule,
    NzSpinModule,
    NzTableModule,
  ],
  declarations: [
    GolferInformationComponent
  ]
})
export class FeatureGolferInformationModule {}

