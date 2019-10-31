import { Injectable } from '@angular/core';
import { Translations } from '../models/translations';
import { TranslationsViewModel } from '../models/translationsViewModel';
import { TranslationViewModel } from '../models/translationViewModel';
import { Translation } from '../models/translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationMapperService {

  constructor() { }

  map(translations: Array<Translations>): Array<TranslationsViewModel> {
    const viewModel = [];
    translations.forEach(t => {
      this.mapTranslations(t, viewModel);
    });
    return viewModel;
  }

  private mapTranslations(translations: Translations, viewModel: Array<TranslationsViewModel>) {
    if (! translations.values) { return; }
    translations.values.forEach(t => {
      this.mapTranslation(t, translations.language, viewModel);
    });
  }

  private mapTranslation(translation: Translation, language: string, viewModel: Array<TranslationsViewModel>) {
    if (translation.value instanceof Array) {
      translation.value.forEach(t => this.mapTranslation(t, language, viewModel));
    } else {
      this.createOrUpdateViewModel(translation.name, translation.value, language, viewModel);
    }
  }

  private createOrUpdateViewModel(name: string, value: string, language: string, viewModel: Array<TranslationsViewModel>) {
    const translationVm = new TranslationViewModel({language, value});
    const existing = viewModel.find(vm => vm.name === name);
    if (existing) {
      existing.values[existing.values.length] = translationVm;
    } else {
      viewModel[viewModel.length] = new TranslationsViewModel({
        name,
        values: [translationVm]
      });
    }
  }
}
