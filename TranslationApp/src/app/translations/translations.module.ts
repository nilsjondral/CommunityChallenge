import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TRANSLATIONS_FEATURE_KEY, translationsReducer, translationsInitialState } from './_state/translations.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      TRANSLATIONS_FEATURE_KEY,
      translationsReducer,
      { initialState: translationsInitialState }
    )
  ]
})
export class TranslationsModule { }
