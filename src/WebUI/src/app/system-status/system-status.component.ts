import { Component, OnInit } from '@angular/core';
import { SystemStatusService } from './../services/system-status.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})
export class SystemStatusComponent implements OnInit {

  identityServiceStatus: boolean = null;
  profileServiceStatus: boolean = null;
  profileSecureServiceStatus: boolean = null;
  projectServiceStatus: boolean = null;

  constructor(
    private systemStatusService: SystemStatusService,
    private authService: AuthService) { }

  ngOnInit() { }

  resetStatus() {
    this.identityServiceStatus = null;
    this.profileServiceStatus = null;
    this.profileSecureServiceStatus = null;
    this.projectServiceStatus = null;
  }

  doStatusCheck() {
    this.systemStatusService
      .getIdentityServiceStatus()
      .subscribe(x => this.identityServiceStatus = x);

    this.systemStatusService
      .getStatusProfileService()
      .subscribe(x => this.profileServiceStatus = x);

    this.systemStatusService
      .getStatusProjectService()
      .subscribe(x => this.projectServiceStatus = x);
  }

  doSecureStatusCheck() {
    this.systemStatusService
      .getStatusProfileSecureService()
      .subscribe(x => this.profileSecureServiceStatus = x);
  }
}
