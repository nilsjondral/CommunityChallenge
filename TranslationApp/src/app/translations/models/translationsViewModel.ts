import { TranslationViewModel } from './translationViewModel';

export class TranslationsViewModel {

  name: string;
  values: Array<TranslationViewModel>;

  constructor(init?: Partial<TranslationsViewModel>) {
    Object.assign(this, init);
  }
}
