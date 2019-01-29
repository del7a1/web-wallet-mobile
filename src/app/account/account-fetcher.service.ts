import { Injectable } from '@angular/core';
import { Account } from './account.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AccountFetcherService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account> {
    return this.http.get(
      `${environment.api}/v3/accounts`
    ).pipe(
      map(data => data['response']['accounts'])
    );
  }

}
