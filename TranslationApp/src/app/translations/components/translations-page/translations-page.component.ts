import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';
import { Observable, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { TranslationsViewModel } from '../../models/translationsViewModel';
import { debounceTime, distinctUntilChanged, map, filter, startWith } from 'rxjs/operators';
import { ValueChange } from '../../models/valueCange';

@Component({
  selector: 'app-translations-page',
  templateUrl: './translations-page.component.html',
  styleUrls: ['./translations-page.component.scss']
})
export class TranslationsPageComponent implements OnInit {

  translations: Observable<Array<TranslationsViewModel>>;
  languages: Observable<Array<string>>;

  private searchTerm = new Subject<string>();

  constructor(private sandbox: TranslationsSandboxService) { }

  ngOnInit() {
    // 1. Source streams
    const unfilteredTranslations = this.sandbox.getTranslationsViewModel();
    const languagesInput = this.sandbox.selectLanguages();
    const searchSource = this.searchTerm.asObservable();

    // 2. Intermediate streams
    const debouncedSearchTerm = searchSource.pipe(
      debounceTime(100),
      startWith(''),
      distinctUntilChanged()
    );
    const combined = combineLatest(unfilteredTranslations, debouncedSearchTerm);
    const filteredTranslations = combined.pipe(
      map(([u, s]) => u.filter(t => s.length < 2 || t.name.indexOf(s) >= 0))
    );

    // 3. Output streams
    this.translations = filteredTranslations;
    this.languages =  languagesInput;
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  change(change: ValueChange) {
    this.sandbox.updateTranslation(change);
  }
}
