import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { JournalEntry, CreateJournalEntry } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})
export class JournalEntriesComponent implements OnInit {

  entry: CreateJournalEntry;
  entries: JournalEntry[] = [];

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.entry = new CreateJournalEntry();
  }

  createEntry() {
    this.journalService
      .createJournalEntry(this.entry)
      .subscribe(e => {
        this.entries.push(e);
      });
    this.entry = new CreateJournalEntry();
  }

}
