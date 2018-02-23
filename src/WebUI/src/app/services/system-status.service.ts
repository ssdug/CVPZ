import {  HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SystemStatusService {

  constructor(private httpClient: HttpClient) { }

  getIdentityServiceStatus(): Observable<boolean> {
    return this.pingHealthController('http://localhost:5001/api/health/ping');
  }

  getStatusProfileService(): Observable<boolean> {
    return this.pingHealthController('http://localhost:5002/api/health/ping');
  }

  getStatusProfileSecureService(): Observable<boolean> {
    return this.pingHealthController('http://localhost:5002/api/health/secureping');
  }

  getStatusProjectService(): Observable<boolean> {
    return this.pingHealthController('http://localhost:5003/api/health/ping');
  }

  pingHealthController(url: string): Observable<boolean> {

    return this.httpClient.get(url, { responseType: 'text' })
      .map((res: any) => {
        console.log(res);
        return res === 'pong';
      })
      .catch(this.handleError);
  }

  private handleError(error: Response): Observable<boolean> {
    console.log(error);
    return Observable.of(false);
  }
}
