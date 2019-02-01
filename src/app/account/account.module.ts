import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountFetcherService } from './account-fetcher.service';
import { AccountsSliderComponent } from './accounts-slider/accounts-slider.component';
import { AccountGeneralInfoComponent } from './account-general-info/account-general-info.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AccountDetailsPage } from './account-details/account-details.page';
import { AccountPageRoutingModule } from './account.router.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccountPageRoutingModule
  ],
  providers: [AccountFetcherService],
  declarations: [AccountsSliderComponent, AccountGeneralInfoComponent, TransactionListComponent, AccountDetailsPage],
  exports: [AccountsSliderComponent]
})
export class AccountModule {}
