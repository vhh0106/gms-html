import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";


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
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class FeatureLoginModule {}

