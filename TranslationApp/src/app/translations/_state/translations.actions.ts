import { Action } from '@ngrx/store';
import { Translations } from '../models/translations';

export enum TranslationsActionTypes {
  Loaded = '[Translations] translations loaded'
}

export class TranslationsLoaded implements Action {
  readonly type = TranslationsActionTypes.Loaded;
  constructor(public payload: Translations) {}
}

export type TranslationsAction = TranslationsLoaded; // | ...

export const translationsActions = {
  TranslationsLoaded
};
