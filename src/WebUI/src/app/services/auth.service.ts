import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { environment } from '../../environments/environment';

const settings: UserManagerSettings = {

  authority: 'http://localhost:5001/',
  client_id: 'angular_spa',
  redirect_uri: 'http://localhost:5000/auth-callback',
  post_logout_redirect_uri: 'http://localhost:5000/',
  response_type: 'id_token token',
  scope: 'openid profile api1',
  filterProtocolClaims: true,
  loadUserInfo: true,
  automaticSilentRenew: true,
  silent_redirect_uri: 'http://localhost:5000/silent-refresh.html'

  // accessTokenExpiringNotificationTime: 4,
  // silentRequestTimeout:10000,

};

@Injectable()
export class AuthService {
  private manager: UserManager = new UserManager(settings);
  private user: User = null;

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedInObs(): Observable<boolean> {
    return Observable.fromPromise(this.manager.getUser()).map<User, boolean>((user) => {
      if (user) {
        return true;
      } else {
        return false;
      }
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }

  startSignoutMainWindow() {
    this.manager.getUser().then(user => {
      return this.manager.signoutRedirect({ id_token_hint: user.id_token }).then(resp => {
        console.log('signed out', resp);
        setTimeout(5000, () => {
          console.log('testing to see if fired...');
        });
      }).catch(function (err) {
        console.log(err);
      });
    });
  }

  endSignoutMainWindow() {
    this.manager.signoutRedirectCallback().then(function (resp) {
      console.log('signed out', resp);
    }).catch(function (err) {
      console.log(err);
    });
  }
}
