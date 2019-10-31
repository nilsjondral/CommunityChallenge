import { Injectable } from '@angular/core';
import { Translations } from '../models/translations';
import { TranslationsViewModel } from '../models/translationsViewModel';
import { TranslationViewModel } from '../models/translationViewModel';

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
    for (const property in translations.values) {
      if (translations.values.hasOwnProperty(property)) {
        this.mapTranslation(property, translations.values[property], translations.language, viewModel);
      }
    }
  }

  private mapTranslation(name: string, value: any, language: string, viewModel: Array<TranslationsViewModel>) {
    if (typeof value !== 'string') {
      for (const property in value) {
        if (value.hasOwnProperty(property)) {
          this.mapTranslation(property, value[property], language, viewModel);
        }
      }
    } else {
      this.createOrUpdateViewModel(name, value, language, viewModel);
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
