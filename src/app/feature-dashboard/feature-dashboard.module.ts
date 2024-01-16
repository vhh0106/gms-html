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
import {DashboardComponent} from "./dashboard/dashboard.component";
import {D} from "@angular/cdk/keycodes";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        data: {breadcrumb: 'dashboard'},
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
  ],
  declarations: [
    DashboardComponent
  ]
})
export class FeatureDashboardModule {}

