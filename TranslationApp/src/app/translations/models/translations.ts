import { Translation } from './translation';

export class Translations {

  language: string;
  values: Array<Translation> = [];

  constructor(init?: Partial<Translations>) {
    if (init) {
      this.language = init.language;
      if (init.values) {
        this.values = init.values.map(v => new Translation(v)); // immutable
      }
    }
  }
}
