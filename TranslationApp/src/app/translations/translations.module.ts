import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TRANSLATIONS_FEATURE_KEY, translationsReducer, translationsInitialState } from './_state/translations.reducer';
import { TranslationMapperService } from './services/translation-mapper.service';
import { TranslationsSandboxService } from './_sandbox/translations-sandbox.service';
import { TranslationsPageComponent } from './components/translations-page/translations-page.component';

@NgModule({
  declarations: [TranslationsPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      TRANSLATIONS_FEATURE_KEY,
      translationsReducer,
      { initialState: translationsInitialState }
    )
  ],
  providers: [
    TranslationsSandboxService,
    TranslationMapperService
  ]
})
export class TranslationsModule { }
