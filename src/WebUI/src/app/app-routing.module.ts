import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CallApiComponent } from './call-api/call-api.component';
import { SystemStatusComponent } from './system-status/system-status.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'call-api',
    component: CallApiComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'system-status',
    component: SystemStatusComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
