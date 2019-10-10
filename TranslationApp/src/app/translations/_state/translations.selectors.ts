import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TranslationsState, TRANSLATIONS_FEATURE_KEY } from './translations.reducer';
import { TranslationsService } from '../services/translations.service';

const getTranslationsState = createFeatureSelector<TranslationsState>(TRANSLATIONS_FEATURE_KEY);

const getLoaded = createSelector(
  getTranslationsState,
  (state: TranslationsState) => state.loaded
);

const getTranslations = createSelector(
  getTranslationsState,
  (state: TranslationsState) => state.translations
);

export const translationsQuery = {
  getLoaded,
  getTranslations
};
