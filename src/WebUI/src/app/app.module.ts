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

//import { AuthModule, OidcSecurityService, OpenIDImplicitFlowConfiguration } from 'angular-auth-oidc-client';

@NgModule({
  declarations: [
    AppComponent,
    SystemStatusComponent,
    AuthCallbackComponent,
    LoginInfoComponent,
    LoginComponent,
    CallApiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
    //AuthModule.forRoot()
  ],
  providers: [SystemStatusService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {}
  // constructor(public oidcSecurityService: OidcSecurityService) {

  //     const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
  //     openIDImplicitFlowConfiguration.stsServer = 'https://localhost:5001';
  //     openIDImplicitFlowConfiguration.redirect_url = 'https://localhost:5001';
  //     openIDImplicitFlowConfiguration.client_id = 'angularclient';
  //     openIDImplicitFlowConfiguration.response_type = 'id_token token';
  //     openIDImplicitFlowConfiguration.scope = 'openid email profile';
  //     openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'https://localhost:5001/Unauthorized';
  //     openIDImplicitFlowConfiguration.start_checksession = false;
  //     openIDImplicitFlowConfiguration.silent_renew = true;
  //     openIDImplicitFlowConfiguration.silent_renew_offset_in_seconds = 0;
  //     openIDImplicitFlowConfiguration.post_login_route = '/home';
  //     openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
  //     openIDImplicitFlowConfiguration.unauthorized_route = '/Unauthorized';
  //     openIDImplicitFlowConfiguration.auto_userinfo = true;
  //     openIDImplicitFlowConfiguration.log_console_warning_active = true;
  //     openIDImplicitFlowConfiguration.log_console_debug_active = false;
  //     openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 10;
  //     openIDImplicitFlowConfiguration.override_well_known_configuration = false;
  //     openIDImplicitFlowConfiguration.override_well_known_configuration_url = 'https://localhost:5001/wellknownconfiguration.json';
  //     // openIDImplicitFlowConfiguration.storage = localStorage;

  //     this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration);

  //     // if you need custom parameters
  //     // oidcSecurityService.setCustomRequestParameters({ 't4': 'ABC abc 123', 't3': 'wo' });
  // }
}
