import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private token: string;
  private redirectUrl = '';

  constructor(private http: HttpClient, private router: Router) { }

  authorize(redirectUrl: string) {
    this.redirectUrl = redirectUrl;

    window.location.href = `${environment.api}/v3/authorize?client_id=${environment.client_id}&redirect_uri=${window.location.origin}/login&scope=ACCOUNTS_BALANCES,ACCOUNTS_BASIC,ACCOUNTS_DETAILS,ACCOUNTS_TRANSACTIONS,PAYMENTS_MULTIPLE&duration=12345&country=DK&state=fakeState`;
  }

  login(code: string) {
    let headers = new HttpHeaders({
      'X-IBM-Client-Id': environment.client_id,
      'X-IBM-Client-Secret': environment.secret,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    });

    let body = `code=${code}&redirect_uri=${window.location.origin}/login`;

    this.http.post(
      `${environment.api}/v3/authorize/token`,
      body,
      { headers: headers }
    ).subscribe(
      data => {
        this.isLoggedIn = true;
        this.token = data['access_token'];
        this.router.navigate([this.redirectUrl]);
      },
      error => {
        console.error('Error occured while authorizing')
      }
    );
  }

  getToken(): string {
    return this.token;
  }

  authenticated(): boolean {
    return this.isLoggedIn;
  }

}
