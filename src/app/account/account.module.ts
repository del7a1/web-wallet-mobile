import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountFetcherService } from './account-fetcher.service';
import { AccountsSliderComponent } from './accounts-slider/accounts-slider.component';
import { AccountGeneralInfoComponent } from './account-general-info/account-general-info.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  providers: [AccountFetcherService],
  declarations: [AccountsSliderComponent, AccountGeneralInfoComponent],
  exports: [AccountsSliderComponent]
})
export class AccountModule {}
