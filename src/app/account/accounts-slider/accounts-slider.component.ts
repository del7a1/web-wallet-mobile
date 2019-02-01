import { Component, OnInit } from '@angular/core';
import { AccountFetcherService } from '../account-fetcher.service';
import { Observable } from 'rxjs';
import { Account } from '../account.interface';

@Component({
  selector: 'accounts-slider',
  templateUrl: './accounts-slider.component.html',
  styleUrls: ['./accounts-slider.component.scss']
})
export class AccountsSliderComponent implements OnInit {

  accounts$: Observable<Array<Account>>;

  constructor(private accountService: AccountFetcherService) { }

  ngOnInit() {
    this.accounts$ = this.accountService.getAccounts();
  }

}
