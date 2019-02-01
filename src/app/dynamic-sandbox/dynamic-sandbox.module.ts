import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicSandboxPage } from './dynamic-sandbox.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DynamicSandboxPage }])
  ],
  declarations: [DynamicSandboxPage]
})
export class DynamicSandboxPageModule {}
