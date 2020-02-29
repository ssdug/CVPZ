import { Injectable } from '@angular/core';
import { JournalEntry, CreateJournalEntry } from '../types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private apiUrl = 'Journal';

  constructor(private http: HttpClient) { }

  public createJournalEntry(entry: CreateJournalEntry): Observable<JournalEntry> {
    return this.http
      .post<JournalEntry>(`${this.apiUrl}/Create`, entry)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server Error');
  }
}
