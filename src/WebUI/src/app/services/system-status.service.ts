import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SystemStatusService {

  constructor(private http: Http) { }

  getIdentityServiceStatus(): Observable<boolean> {
    return this.pingHealthController('http://localhost:5001/api/health/ping');
  }

  getStatusProfileService(): Observable<boolean> {
    return this.pingHealthController('http://localhost:5002/api/health/ping');
  }

  getStatusProjectService(): Observable<boolean> {
    return this.pingHealthController('http://localhost:5003/api/health/ping');
  }

  pingHealthController(url: string): Observable<boolean> {
    return this.http.get(url)
      .map((res: Response) => res.text() === 'pong')
      .catch(this.handleError);
  }

  private handleError(error: Response): Observable<boolean> {
    console.log(error);
    return Observable.of(false);
  }
}
