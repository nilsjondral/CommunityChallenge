import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TRANSLATIONS_FEATURE_KEY, translationsReducer, translationsInitialState } from './_state/translations.reducer';
import { TranslationMapperService } from './services/translation-mapper.service';
import { TranslationsSandboxService } from './_sandbox/translations-sandbox.service';
import { TranslationsPageComponent } from './components/translations-page/translations-page.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { ExportPageComponent } from './components/export-page/export-page.component';
import { LoadingViewComponent } from './components/loading-view/loading-view.component';
import { ExportViewComponent } from './components/export-view/export-view.component';
import { TranslationsViewComponent } from './components/translations-view/translations-view.component';
import { RouterModule } from '@angular/router';
import { TranslationsSearchComponent } from './components/translations-search/translations-search.component';
import { ExportTranslationViewComponent } from './components/export-translation-view/export-translation-view.component';
import { TranslationEditViewComponent } from './components/translation-edit-view/translation-edit-view.component';

@NgModule({
  declarations: [
    TranslationsPageComponent,
    LoadingPageComponent,
    ExportPageComponent,
    LoadingViewComponent,
    ExportViewComponent,
    TranslationsViewComponent,
    TranslationsSearchComponent,
    ExportTranslationViewComponent,
    TranslationEditViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
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
