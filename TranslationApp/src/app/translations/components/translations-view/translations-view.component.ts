import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslationsViewModel } from '../../models/translationsViewModel';
import { TranslationViewModel } from '../../models/translationViewModel';
import { ValueChange } from '../../models/valueCange';

@Component({
  selector: 'app-translations-view',
  templateUrl: './translations-view.component.html',
  styleUrls: ['./translations-view.component.scss']
})
export class TranslationsViewComponent implements OnInit {

  @Input() translations: Array<TranslationsViewModel>;
  @Input() languages: Array<string>;
  @Output() valueChanged: EventEmitter<ValueChange> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getValue(viewModel: TranslationsViewModel, language: string): string {
    const value = viewModel.values.find(vm => vm.language === language);
    if (value) {
      return value.value;
    }
    return null;
  }

  change(change: ValueChange) {
    this.valueChanged.emit(change);
  }
}
