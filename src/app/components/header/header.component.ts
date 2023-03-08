import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyEnum } from 'src/app/enums/currency-enum';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  costOfDollar$!: Observable<number>;
  costOfEuro$!: Observable<number>;

  constructor(private currenciesService: CurrenciesService) { }

  ngOnInit(): void {
    this.costOfDollar$ = this.currenciesService.convertCurrencies(CurrencyEnum.UAH, CurrencyEnum.USD, 1);
    this.costOfEuro$ = this.currenciesService.convertCurrencies(CurrencyEnum.UAH, CurrencyEnum.EUR, 1);
  }
}
