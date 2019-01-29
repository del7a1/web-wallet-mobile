import { Component, Input } from '@angular/core';
// import { CurrencyPipe } from '@angular/common';
import { Account } from '../account.interface';

@Component({
  selector: 'account-general-info',
  templateUrl: './account-general-info.component.html',
  styleUrls: ['./account-general-info.component.scss']
})
export class AccountGeneralInfoComponent {

  @Input() account: Account;

  constructor() { }

  // getAvailableBalance() {
  //   return this.currencyPipe.transform(this.account.available_balance, this.account.currency, true, '1.2-2');
  // }

}
