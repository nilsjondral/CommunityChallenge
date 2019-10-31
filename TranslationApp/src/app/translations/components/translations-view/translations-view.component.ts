import { Component, OnInit, Input } from '@angular/core';
import { TranslationsViewModel } from '../../models/translationsViewModel';
import { TranslationViewModel } from '../../models/translationViewModel';

@Component({
  selector: 'app-translations-view',
  templateUrl: './translations-view.component.html',
  styleUrls: ['./translations-view.component.scss']
})
export class TranslationsViewComponent implements OnInit {

  @Input() translations: Array<TranslationsViewModel>;
  @Input() languages: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  getValue(viewModel: TranslationsViewModel, language: string): string {
    const value = viewModel.values.find(vm => vm.language === language);
    if (value) {
      return value.value;
    }
    return '';
  }
}
