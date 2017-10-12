import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SystemStatusService } from './system-status.service';
import { SystemStatusComponent } from './system-status/system-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SystemStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
