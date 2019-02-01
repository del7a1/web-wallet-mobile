import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'page-code-redirect',
  templateUrl: './code-redirect.page.html',
  styleUrls: ['./code-redirect.page.scss']
})
export class CodeRedirectPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        params => this.authService.codeToToken(params['code'])
          .subscribe(
            redirectUrl => this.router.navigate([redirectUrl]),
            error => {
              console.log('Errror');
              this.router.navigate([this.authService.getRedirectUrl()]);
            }
          )
      );
  }

}
