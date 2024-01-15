import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent,
                data: {breadcrumb: 'login'},
            }
        ]),
        NzIconModule,
        NzInputModule,
        NzCheckboxModule,
    ],
  declarations: [
    LoginComponent
  ]
})
export class FeatureLoginModule {}

