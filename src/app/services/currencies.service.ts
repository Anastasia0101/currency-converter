import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CurrencyResponseApi } from '../models/currency-response-api.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CurrenciesService {
  constructor(private httpClient: HttpClient) { }

  convertCurrencies(
    wantedCurrency: string,
    inputedCurrency: string,
    inputedAmount: number
  ): Observable<number> {
    const url = 'https://api.apilayer.com/exchangerates_data/convert';
    const requestParams = `?to=${wantedCurrency}&from=${inputedCurrency}&amount=${inputedAmount}`;
    const options = {
      headers: {
        apikey: environment.keyApi
      }
    };
    return this.httpClient.get(url + requestParams, options).pipe(
      map((response) => response as CurrencyResponseApi),
      map(result => result.result)
    );
  }
}
