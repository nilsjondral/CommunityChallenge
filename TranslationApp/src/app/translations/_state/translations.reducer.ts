import { TranslationsAction, TranslationsActionTypes } from './translations.actions';
import { Translations } from '../models/translations';

export const TRANSLATIONS_FEATURE_KEY = 'translationsFeature';

export interface TranslationsState {
  loaded: boolean;
  translations: Translations;
}

export interface TranslationsPartialState {
  readonly [TRANSLATIONS_FEATURE_KEY]: TranslationsState;
}

export const translationsInitialState: TranslationsState = {
  loaded:  false,
  translations: null
};

export function translationsReducer(
  state: TranslationsState = translationsInitialState,
  action: TranslationsAction
): TranslationsState {
  switch (action.type) {
    case TranslationsActionTypes.Loaded: {
      state = {...state};
      state.loaded = true;
      state.translations = new Translations(action.payload);
      break;
    }
  }
  return state;
}
