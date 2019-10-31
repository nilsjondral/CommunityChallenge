import { Action } from '@ngrx/store';
import { Translations } from '../models/translations';

export enum TranslationsActionTypes {
  Loaded = '[Translations] translation loaded',
  Clear = '[Translations] clear all translations',
  UpdateTranslation = '[Translations] update a single translation'
}

export class LoadTranslations implements Action {
  readonly type = TranslationsActionTypes.Loaded;
  constructor(public payload: Translations) {}
}

export class ClearTranslations implements Action {
  readonly type = TranslationsActionTypes.Clear;
}

export class UpdateTranslation implements Action {
  readonly type = TranslationsActionTypes.UpdateTranslation;
  constructor(public payload: {language: string, name: string, value: string}) {}
}

export type TranslationsAction = LoadTranslations
  | ClearTranslations
  | UpdateTranslation;

export const translationsActions = {
  LoadTranslations,
  ClearTranslations,
  UpdateTranslation
};
