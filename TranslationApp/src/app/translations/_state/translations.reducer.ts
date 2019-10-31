import { TranslationsAction, TranslationsActionTypes, UpdateTranslation } from './translations.actions';
import { Translations } from '../models/translations';
import { Translation } from '../models/translation';

export const TRANSLATIONS_FEATURE_KEY = 'translationsFeature';

export interface TranslationsState {
  loaded: boolean;
  translations: Array<Translations>;
}

export interface TranslationsPartialState {
  readonly [TRANSLATIONS_FEATURE_KEY]: TranslationsState;
}

export const translationsInitialState: TranslationsState = {
  loaded:  false,
  translations: []
};

export function translationsReducer(
  state: TranslationsState = translationsInitialState,
  action: TranslationsAction
): TranslationsState {
  switch (action.type) {
    case TranslationsActionTypes.Loaded: {
      state = {
        ...state,
        loaded: true
      };
      state.translations[state.translations.length] = new Translations(action.payload);
      break;
    }

    case TranslationsActionTypes.Clear: {
      state = {
        ...state,
        translations: []
      };
      break;
    }

    case TranslationsActionTypes.UpdateTranslation: {
      state = {
        ...state,
        translations: state.translations.map(t => new Translations(t)) // deep copy
      };
      updateTranslations(state.translations, action);
      break;
    }
  }
  return state;
}

function updateTranslations(state: Array<Translations>, action: UpdateTranslation) {
  const translations = state.find(t => t.language === action.payload.language);
  if (translations) {
    updateTranslation(translations.values, action.payload.name, action.payload.value);
  }
}

function updateTranslation(values: Array<Translation>, name: string, value: string) {
  values.forEach(v => {
    if (v.name === name) {
      v.value = value;
    } else if (v.value instanceof Array) {
      updateTranslation(v.value, name, value);
    }
  });
}
