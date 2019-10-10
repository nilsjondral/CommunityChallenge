import { Injectable } from '@angular/core';
import { TranslationsState } from '../_state/translations.reducer';
import { Store, select } from '@ngrx/store';
import { TranslationsService } from '../services/translations.service';
import { Observable } from 'rxjs';
import { translationsQuery } from '../_state/translations.selectors';
import { Translations } from '../models/translations';
import { TranslationsLoaded } from '../_state/translations.actions';
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

  selectTranslations(): Observable<Translations> {
    return this.store.pipe(select(translationsQuery.getTranslations));
  }

  loadTranslations(language: string): Observable<Translations> {
    const get = this.service.getTranslations(language);

    const saveToState = get.pipe(map((t: Translations) => {
      this.store.dispatch(new TranslationsLoaded(t));
    }));

    return saveToState.pipe(switchMap(() => this.selectTranslations()));
  }
}
