import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { JournalEntry } from '../types';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})
export class JournalEntriesComponent implements OnInit {

  entry: JournalEntry;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.entry = new JournalEntry();
  }

  createEntry() {
    this.journalService.createJournalEntry(this.entry);
    this.entry = new JournalEntry();
  }

}
