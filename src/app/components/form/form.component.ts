import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyEnum } from 'src/app/enums/CurrencyEnum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formGroup: FormGroup = this.formBuilder.group({
    giveAmount: [null, [Validators.required]],
    giveCurrencyCode: [null, [Validators.required]],
    takeAmount: [0, [Validators.required]],
    takeCurrencyCode: [null, [Validators.required]]
  });

  currencies = Object.values(CurrencyEnum);

  constructor(
    private formBuilder: FormBuilder,
  ) { }
}
