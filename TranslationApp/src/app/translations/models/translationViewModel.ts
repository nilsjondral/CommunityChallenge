export class TranslationViewModel {

  language: string;
  value: string;

  constructor(init?: Partial<TranslationViewModel>) {
    Object.assign(this, init);
  }
}
