import {ControlValueAccessor} from "@angular/forms";
import {noop} from "rxjs";

export class FieldBase<T> implements ControlValueAccessor {
  triggerOnChange: (_: T | undefined) => void = noop;
  triggerOnTouch: () => void = noop;

  innerValue: T | undefined;
  disabled: boolean = false;

  constructor() {
  }

  get value(): any {
    return this.innerValue;
  }

  set value(value) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.triggerOnChange(this.innerValue);
    }
  }

  registerOnChange(fn: (_: T | undefined) => void): void {
    this.triggerOnChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.triggerOnTouch = fn;
  }

  writeValue(obj: any): void {
    this.innerValue = obj
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
