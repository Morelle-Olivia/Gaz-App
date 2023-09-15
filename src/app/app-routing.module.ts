import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {TransactionsComponent} from "./pages/transactions/transactions.component";

const routes: Routes = [
  {
    path: 'web/signUp',
    component: SignUpComponent,
  },
  {
    path: 'web/login',
    component: LoginComponent,
  },
  {
    path: 'web/dashboard',
    component: DashboardComponent,
  },
  {
    path: 'web/landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'web/transactions',
    component: TransactionsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
