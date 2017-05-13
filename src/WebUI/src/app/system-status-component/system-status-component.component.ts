import { SystemStatusService } from './../system-status.service';
import { HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-status-component',
  templateUrl: './system-status-component.component.html',
  styleUrls: ['./system-status-component.component.css']
})
export class SystemStatusComponentComponent implements OnInit {

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
