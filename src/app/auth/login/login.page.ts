import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'page-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  @ViewChild('pinField') pinField: any;

  pin: string;
  code: string;
  inProgress: boolean;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.code = params['code']);
  }

  ionViewLoaded() {
    setTimeout(() => {
      this.pinField.setFocus();
    }, 150);
  }

  login() {
    this.inProgress = true;
    this.authService.login(this.code);
  }

}
