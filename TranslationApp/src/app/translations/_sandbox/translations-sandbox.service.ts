import { Injectable } from '@angular/core';
import { TranslationsState } from '../_state/translations.reducer';
import { Store, select } from '@ngrx/store';
import { TranslationsService } from '../services/translations.service';
import { Observable } from 'rxjs';
import { translationsQuery } from '../_state/translations.selectors';
import { Translations } from '../models/translations';
import { LoadTranslations, ClearTranslations, UpdateTranslation } from '../_state/translations.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationsSandboxService {

  constructor(
    private store: Store<TranslationsState>,
    private service: TranslationsService
  ) { }

  selectLoaded(): Observable<boolean> {
    return this.store.pipe(select(translationsQuery.getLoaded));
  }

  selectAllTranslations(): Observable<Array<Translations>> {
    return this.store.pipe(select(translationsQuery.getAllTranslations));
  }

  selectTranslations(language: string): Observable<Translations> {
    return this.store.pipe(select(translationsQuery.getTranslations, { language }));
  }

  selectLanguages(): Observable<Array<string>> {
    return this.store.pipe(select(translationsQuery.getLanguages));
  }

  clearTranslations(): void {
    this.store.dispatch(new ClearTranslations());
  }

  updateTranslation(language: string, name: string, value: string): void {
    this.store.dispatch(new UpdateTranslation({language, name, value}));
  }

  loadTranslation(translations: Translations) {
    this.store.dispatch(new LoadTranslations(translations));
  }
}
