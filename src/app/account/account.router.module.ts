import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AccountDetailsPage } from './account-details/account-details.page';

const routes: Routes = [
  {
    path: 'account',
    component: AccountDetailsPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountPageRoutingModule { }
