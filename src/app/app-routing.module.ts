import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {ChatComponent} from "./chat/chat.component";
import {AuthGuard} from "./services/security/auth.guard";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {SearchComponent} from "./search/search.component";
import {PaymentComponent} from "./payment/payment.component";
import {ProfileComponent} from "./account/profile/profile.component";
import {SignupInfoComponent} from "./auth/signup-info/signup-info.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-info', component: SignupInfoComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
