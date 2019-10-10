import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Translations } from '../models/translations';
import { Translation } from '../models/translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  constructor() { }

  getTranslations(language: string): Observable<Translations> {
    // TODO
    return of(new Translations({
      language,
      values: [
        new Translation({ name: 'test1', value: 'test1'}),
        new Translation({
          name: 'nested',
          value: [
            new Translation({name: 'nested1', value: 'nested1'}),
            new Translation({name: 'nested2', value: 'nested2'})
          ]
        })
      ]
    }));
  }

  saveTranslations(translations: Translations): Observable<void> {
    // TODO
    return of(translations).pipe(
      tap(t => console.log('save', t)),
      map(() => null)
    );
  }
}
