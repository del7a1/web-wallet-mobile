import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountFetcherService } from '../account-fetcher.service';
import { Account } from '../account.interface';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'page-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss']
})
export class AccountDetailsPage implements OnInit {

  id$: Observable<string>;
  account$: Observable<Account>;
  transactions$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountFetcherService
  ) { }

  ngOnInit() {
    this.id$ = this.route.paramMap.pipe(
       map(params => params.get('id'))
     );

    this.account$ = this.id$
      .pipe(
        flatMap(
          id => this.accountService.getAccount(id)
        )
      );

    this.transactions$ = this.id$
      .pipe(
        flatMap(
          id => this.accountService.getTransactions(id)
        )
      );
  }

}
