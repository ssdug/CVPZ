import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
