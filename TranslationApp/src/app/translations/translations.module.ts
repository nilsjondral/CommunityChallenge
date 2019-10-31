import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TRANSLATIONS_FEATURE_KEY, translationsReducer, translationsInitialState } from './_state/translations.reducer';
import { TranslationsService } from './services/translations.service';
import { TranslationMapperService } from './services/translation-mapper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      TRANSLATIONS_FEATURE_KEY,
      translationsReducer,
      { initialState: translationsInitialState }
    )
  ],
  providers: [
    TranslationsService,
    TranslationMapperService
  ]
})
export class TranslationsModule { }
