import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SystemStatusService } from './services/system-status.service';
import { SystemStatusComponent } from './system-status/system-status.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LoginComponent } from './login/login.component';
import { CallApiComponent } from './call-api/call-api.component';
import { LoginStatusComponent } from './login-status/login-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TokenInterceptor } from './auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SystemStatusComponent,
    AuthCallbackComponent,
    LoginComponent,
    CallApiComponent,
    LoginStatusComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    SystemStatusService,
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {}
}
