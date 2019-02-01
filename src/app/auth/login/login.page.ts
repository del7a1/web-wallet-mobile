import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'page-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  @ViewChild('pinField') pinField: any;

  pin: string;
  code: string;
  inProgress: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ionViewLoaded() {
    setTimeout(() => {
      this.pinField.setFocus();
    }, 150);
  }

  login() {
    this.inProgress = true;
    this.authService.login();
  }

}
