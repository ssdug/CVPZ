import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {
  _user: any;
  loadedUserSub: any;

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
}
