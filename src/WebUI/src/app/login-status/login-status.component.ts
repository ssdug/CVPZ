import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  loggedIn: Boolean = false;
  claims: any;

  constructor(private authService: AuthService) {
    const isLoggedIn = this.authService.isLoggedInObs();
    isLoggedIn.subscribe((l) => {
      this.loggedIn = l;
      if (this.loggedIn) {
        this.claims = this.authService.getClaims();
      }
    });
  }

  ngOnInit() {

  }

  doLogout() {
    this.authService.startSignoutMainWindow();
  }

}
