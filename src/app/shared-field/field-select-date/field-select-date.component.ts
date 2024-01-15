import {AfterContentInit, Component, forwardRef, Input, Optional} from '@angular/core';
import {FieldBase} from "../field.base";
import {ControlContainer, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";

@Component({
  selector: 'app-field-select-date',
  templateUrl: './field-select-date.component.html',
  styleUrls: ['./field-select-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldSelectDateComponent),
      multi: true
    },
  ]
})
export class FieldSelectDateComponent extends FieldBase<any> implements AfterContentInit {
  @Input() nzPlaceHolder!: NzDatePickerComponent['nzPlaceHolder'];
  @Input() formControlName: string | undefined;
  @Input() nzAllowClear: NzDatePickerComponent['nzAllowClear'] = true;
  @Input() nzShowTime: NzDatePickerComponent['nzShowTime'] = false;
  @Input() nzFormat: any;
  override innerValue!: Date;

  constructor(@Optional() private controlContainer: ControlContainer) {
    super();
  }

  ngAfterContentInit() {
    this.allowClearSelected()
  }

  override writeValue(value: number) {
    if (value) {
      this.innerValue = new Date(value)
    }
  }

  dateChange(date: Date) {
    if (this.nzShowTime) {
      this.triggerOnChange(date ? new Date(date).getTime() : null)
    } else {
      this.triggerOnChange(date ? new Date(date).setHours(0, 0, 0, 0) : null)
    }

  }

  allowClearSelected() {
    if (this.formControlName) {
      const control = this.controlContainer.control?.get(this.formControlName);
      this.nzAllowClear = !control?.hasValidator(Validators.required)
    }
  }
}
