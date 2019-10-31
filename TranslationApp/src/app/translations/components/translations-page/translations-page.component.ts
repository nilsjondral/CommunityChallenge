import { Component, OnInit } from '@angular/core';
import { TranslationsSandboxService } from '../../_sandbox/translations-sandbox.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { TranslationsViewModel } from '../../models/translationsViewModel';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { ValueChange } from '../../models/valueCange';

@Component({
  selector: 'app-translations-page',
  templateUrl: './translations-page.component.html',
  styleUrls: ['./translations-page.component.scss']
})
export class TranslationsPageComponent implements OnInit {

  translations: Observable<Array<TranslationsViewModel>>;
  languages: Observable<Array<string>>;

  private searchTerm = new BehaviorSubject('');

  constructor(private sandbox: TranslationsSandboxService) { }

  ngOnInit() {
    // Intermediate streams
    const unfilteredTranslations = this.sandbox.getTranslationsViewModel();
    const debounced = this.searchTerm.pipe(
      debounceTime(100),
      distinctUntilChanged()
    );
    const combined = combineLatest(unfilteredTranslations, debounced);

    // Output streams
    this.translations = combined.pipe(
      map(([u, s]) => u.filter(t => s.length < 2 || t.name.indexOf(s) >= 0))
    );
    this.languages = this.sandbox.selectLanguages();
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  change(change: ValueChange) {
    this.sandbox.updateTranslation(change);
  }
}
