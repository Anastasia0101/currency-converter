import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formGroup: FormGroup = this.formBuilder.group({
    giveAmount: [null, [Validators.required]],
    giveCurrencyCode: [null, [Validators.required]],
    takeAmount: [null, [Validators.required]],
    takeCurrencyCode: [null, [Validators.required]]
  });


  constructor(private formBuilder: FormBuilder) { }

  onFormSubmit(): void {
    console.log(this.formGroup.value);
  }
}
