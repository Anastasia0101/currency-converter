import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyEnum } from 'src/app/enums/CurrencyEnum';
import { CurrenciesService } from 'src/app/services/currencies.service';

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
    private currenciesService: CurrenciesService
  ) { }

  onControlChanged(prefixInputedControl: string): void {
    console.log('on change control')
    const prefixWantedControl = prefixInputedControl === 'give' ? 'take' : 'give';

    const inputedAmount = this.formGroup.get(`${prefixInputedControl}Amount`)!.value;
    const wantedCurrencyCode = this.formGroup.get(`${prefixWantedControl}CurrencyCode`)!.value;
    const inputedCurrencyCode = this.formGroup.get(`${prefixInputedControl}CurrencyCode`)!.value;
    
    this.currenciesService.convertCurrencies(wantedCurrencyCode, inputedCurrencyCode, inputedAmount).subscribe(data => {
      this.formGroup.get(`${prefixWantedControl}Amount`)!.setValue(data.result);
    });
  }
}
