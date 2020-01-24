import { Injectable } from '@angular/core';
import { JournalEntry } from '../types';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }

  public createJournalEntry(entry: JournalEntry) {
    console.log(entry);
  }
}
