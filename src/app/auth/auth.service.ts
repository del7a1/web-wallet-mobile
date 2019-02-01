import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private token: string;
  private redirectUrl = '';

  constructor(private http: HttpClient) { }

  login() {
    window.location.href = `${environment.api}/v3/authorize?client_id=${environment.client_id}&redirect_uri=${window.location.origin}/code-redirect&scope=ACCOUNTS_BALANCES,ACCOUNTS_BASIC,ACCOUNTS_DETAILS,ACCOUNTS_TRANSACTIONS,PAYMENTS_MULTIPLE&duration=12345&country=DK&state=fakeState`;
  }

  codeToToken(code: string): Observable<string> {
    let headers = new HttpHeaders({
      'X-IBM-Client-Id': environment.client_id,
      'X-IBM-Client-Secret': environment.secret,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    });

    let body = `code=${code}&redirect_uri=${window.location.origin}/code-redirect`;

    return this.http.post(
      `${environment.api}/v3/authorize/token`,
      body,
      { headers: headers }
    ).pipe(
      map(data => {
        this.isLoggedIn = true;
        this.token = data['access_token'];
        return this.redirectUrl;
      })
    );
  }

  getToken(): string {
    return this.token;
  }

  authenticated(): boolean {
    return this.isLoggedIn;
  }

  setRedirectUrl(redirectUrl: string) {
    this.redirectUrl = redirectUrl;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

}
