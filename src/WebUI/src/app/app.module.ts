import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SystemStatusService } from './services/system-status.service';
import { SystemStatusComponent } from './system-status/system-status.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { LoginComponent } from './login/login.component';
import { CallApiComponent } from './call-api/call-api.component';
import { LoginStatusComponent } from './login-status/login-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemStatusComponent,
    AuthCallbackComponent,
    LoginInfoComponent,
    LoginComponent,
    CallApiComponent,
    LoginStatusComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [SystemStatusService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {}
}
