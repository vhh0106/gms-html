import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {ProfileComponent} from "./profile/profile.component";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {SharedFieldsModule} from "../shared-field/shared-fields.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzTableModule} from "ng-zorro-antd/table";
import {SharedIconModule} from "../shared-icon/shared-icon.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent,
                data: {breadcrumb: 'profile'},
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
        NzFormModule,
        NzTableModule,
        SharedIconModule,
    ],
  declarations: [
    ProfileComponent
  ]
})
export class FeatureProfileModule {}

