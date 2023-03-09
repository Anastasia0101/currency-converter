import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function valueNotEqualZeroValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return {value: true};
    }
    return null;
  }
}
