import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyEnum } from 'src/app/enums/currency-enum';
import { ControlsPrefixesEnum } from 'src/app/enums/controls-prefixes-enum';
import { CurrenciesService } from 'src/app/services/currencies.service';
import { valueNotEqualZeroValidator } from 'src/app/validators/value-not-equal-zero.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formGroup: FormGroup = this.formBuilder.group({
    giveAmount: [
      '', [
        Validators.required,
        Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
        valueNotEqualZeroValidator()
      ]
    ],
    giveCurrencyCode: [
      'USD',
      [Validators.required]
    ],
    takeAmount: [
      '', [
        Validators.required,
        Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
        valueNotEqualZeroValidator()
      ]
    ],
    takeCurrencyCode: [
      'UAH',
      [Validators.required]
    ]
  });
  currencies = Object.values(CurrencyEnum);
  prefixesEnum = ControlsPrefixesEnum;

  constructor(
    private formBuilder: FormBuilder,
    private currenciesService: CurrenciesService
  ) { }

  onControlChanged(prefixInputedControl: string): void {
    if (this.formGroup.get(`${prefixInputedControl}Amount`)?.invalid) return;
    const prefixWantedControl = prefixInputedControl === this.prefixesEnum.GIVE ? this.prefixesEnum.TAKE : this.prefixesEnum.GIVE;
    this.convertCurrency(prefixInputedControl, prefixWantedControl);
  }

  convertCurrency(prefixInputedControl: string, prefixWantedControl: string): void {
    const inputedAmount = this.formGroup.get(`${prefixInputedControl}Amount`)!.value;
    const wantedCurrencyCode = this.formGroup.get(`${prefixWantedControl}CurrencyCode`)!.value;
    const inputedCurrencyCode = this.formGroup.get(`${prefixInputedControl}CurrencyCode`)!.value;

    this.currenciesService.convertCurrencies(
      wantedCurrencyCode,
      inputedCurrencyCode,
      inputedAmount
    ).subscribe(data => {
      this.formGroup.get(`${prefixWantedControl}Amount`)!.setValue(data);
    });
  }
}
