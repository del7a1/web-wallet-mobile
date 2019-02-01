import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountFetcherService } from '../account-fetcher.service';
import { Account, TransactionResponse } from '../account.interface';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

export interface IdAndTransactionResponse {
  id: string;
  transactionResponse$: Observable<TransactionResponse>;
}

@Component({
  selector: 'page-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss']
})
export class AccountDetailsPage implements OnInit {

  account$: Observable<Account>;
  idAndTransactionResponse$: Observable<IdAndTransactionResponse>;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountFetcherService
  ) { }

  ngOnInit() {
    let id$ = this.route.paramMap.pipe(
      map(params => params.get('id'))
    );

    this.account$ = id$
      .pipe(
        flatMap(
          id => this.accountService.getAccount(id)
        )
      );

    this.idAndTransactionResponse$ = id$
      .pipe(
        map(
          id => {
            let response = this.accountService.getTransactions(id);
            return <IdAndTransactionResponse>{ id: id, transactionResponse$: response }
          }
        )
      );
  }

}
