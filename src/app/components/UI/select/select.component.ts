import { Component } from '@angular/core';
import { CurrencyEnum } from 'src/app/enums/currency-enum';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  currencies = Object.values(CurrencyEnum);
}
