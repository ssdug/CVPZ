import { Component, OnInit } from '@angular/core';
import { SystemStatusService } from './../system-status.service';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})
export class SystemStatusComponent implements OnInit {

  identityServiceStatus: boolean = null;
  profileServiceStatus: boolean = null;
  projectServiceStatus: boolean = null;

  constructor(private systemStatusService: SystemStatusService) { }

  ngOnInit() { }

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
}
