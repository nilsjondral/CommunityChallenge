import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TranslationsState, TRANSLATIONS_FEATURE_KEY } from './translations.reducer';
import { Translations } from '../models/translations';

const getTranslationsState = createFeatureSelector<TranslationsState>(TRANSLATIONS_FEATURE_KEY);

const getLoaded = createSelector(
  getTranslationsState,
  (state: TranslationsState) => state.loaded
);

const getAllTranslations = createSelector(
  getTranslationsState,
  (state: TranslationsState) => state.translations
);

const getTranslations = createSelector(
  getTranslationsState,
  (state: TranslationsState, props: any) => state.translations.find(t => t.language === props.language)
);

const getLanguages = createSelector(
  getAllTranslations,
  (translations: Array<Translations>) => translations.map(t => t.language)
);

export const translationsQuery = {
  getLoaded,
  getAllTranslations,
  getTranslations,
  getLanguages
};
