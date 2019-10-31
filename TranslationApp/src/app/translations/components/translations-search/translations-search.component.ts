import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-translations-search',
  templateUrl: './translations-search.component.html',
  styleUrls: ['./translations-search.component.scss']
})
export class TranslationsSearchComponent implements OnInit, OnDestroy {

  @Output() search: EventEmitter<string> = new EventEmitter();

  searchText = new FormControl('');

  private destory = new Subject();

  constructor() { }

  ngOnInit() {
    this.searchText.valueChanges.pipe(takeUntil(this.destory))
      .subscribe(v => this.search.emit(v));
  }

  ngOnDestroy(): void {
    this.destory.next(true);
    this.destory = null;
  }
}
