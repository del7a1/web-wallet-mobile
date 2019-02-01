import { Component, Input } from '@angular/core';
import { Account } from '../account.interface';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'account-general-info',
  templateUrl: './account-general-info.component.html',
  styleUrls: ['./account-general-info.component.scss']
})
export class AccountGeneralInfoComponent {

  @Input() account: Account;

  constructor(
    private router: Router,
    private navControll: NavController
  ) { }

  showDetails() {
    
    this.router.navigate(['account', { id: this.account._id }]);
  }

  goBack() {
    this.navControll.pop();
  }

}
