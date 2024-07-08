import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {CustomLoader} from "./translate-loader";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import {JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "./services/auth.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ThanksComponent } from './general/thanks/thanks.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { JwtInterceptor } from './services/security/jwt.interceptor';
import { ProfileComponent } from './account/profile/profile.component';
import { SignupInfoComponent } from './auth/signup-info/signup-info.component';
import { ProfileSettingsComponent } from './account/profile-settings/profile-settings.component';
import { SignupAboutComponent } from './auth/signup-about/signup-about.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ChatComponent,
    ForgotPasswordComponent,
    ThanksComponent,
    SearchComponent,
    PaymentComponent,
    ProfileComponent,
    SignupInfoComponent,
    ProfileSettingsComponent,
    SignupAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['http://localhost:8090'], // Update with your API domain
        disallowedRoutes: ['http://localhost:8090/authenticate', 'http://localhost:8090/register'] // Update with your auth routes
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
