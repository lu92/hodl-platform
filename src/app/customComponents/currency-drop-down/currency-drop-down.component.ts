import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-drop-down',
  templateUrl: './currency-drop-down.component.html',
  styleUrls: ['./currency-drop-down.component.css']
})
export class CurrencyDropDownComponent implements OnInit {

  selectedCurrency = 'Currency';
  supportedCryptocurrencies: string[] = ['BTC', 'ETH', 'NEO', 'POE', 'USDT'];

  clickFun(event: any) {
    let chosenCurrency: string = event.target.textContent;
    console.log('click:', chosenCurrency);
    this.selectedCurrency = chosenCurrency;
  }

  ngOnInit() {
  }

}
