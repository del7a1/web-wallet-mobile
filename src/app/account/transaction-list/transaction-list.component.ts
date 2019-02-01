import { Component, Input, ViewChild } from '@angular/core';
import { TransactionResponse, Transaction } from '../account.interface';
import { IonInfiniteScroll } from '@ionic/angular';
import { AccountFetcherService } from '../account-fetcher.service';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {

  @Input() transactions: Array<Transaction>;
  @Input() accountId: string;
  @Input() continuationKey: string;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private accountService: AccountFetcherService) { }

  loadData(event) {
    if (this.continuationKey) {
      this.accountService.getTransactions(this.accountId)
        .subscribe(
          transactionResponse => {
            this.transactions = this.transactions.concat(transactionResponse.transactions);
            this.continuationKey = transactionResponse.continuation_key;
            event.target.complete();
          },
          error => event.target.complete()
        )
    } else {
      event.target.complete();
    }
  }

}
