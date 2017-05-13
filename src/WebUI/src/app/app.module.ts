import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SystemStatusService } from './system-status.service';
import { SystemStatusComponentComponent } from './system-status-component/system-status-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemStatusComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SystemStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
