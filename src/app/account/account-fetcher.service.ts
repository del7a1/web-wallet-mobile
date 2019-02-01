import { Injectable } from '@angular/core';
import { Account, TransactionResponse } from './account.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountFetcherService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Array<Account>> {
    return this.http.get(
      `${environment.api}/v3/accounts`
    ).pipe(
      map(data => data['response']['accounts'])
    );
  }

  getAccount(accountId: string): Observable<Account> {
    return this.http.get(
      `${environment.api}/v3/accounts/${accountId}`
    ).pipe(
      map(data => data['response'])
    );
  }

  getTransactions(accountId: string): Observable<TransactionResponse> {
    return this.http.get(
      `${environment.api}/v3/accounts/${accountId}/transactions`
    ).pipe(
      map(data => data['response'])
    );
  }
}
