import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from '../auth/login/login.page';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth/auth.guard';
import { CodeRedirectPage } from '../auth/code-redirect/code-redirect.page';

const routes: Routes = [
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'code-redirect', component: CodeRedirectPage },
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'payment',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: '../payment/payment.module#PaymentPageModule'
          }
        ]
      },
      {
        path: 'dynamic-sandbox',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: '../dynamic-sandbox/dynamic-sandbox.module#DynamicSandboxPageModule'
          }
        ]
      },
      {
        path: '',
        canActivateChild: [AuthGuard],
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
