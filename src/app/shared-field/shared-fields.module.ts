import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FieldSelectDateComponent} from './field-select-date/field-select-date.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    FieldSelectDateComponent,
  ],
  exports: [
    FieldSelectDateComponent,

  ],
  imports: [
    CommonModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzSpinModule,
    NzIconModule,
    NzAvatarModule,
    NzInputModule,

  ]
})
export class SharedFieldsModule {
}
