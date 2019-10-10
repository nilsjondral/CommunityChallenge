import { Translation } from './translation';

export class Translations {

  language: string;
  values: Array<Translation> = [];

  constructor(init?: Partial<Translations>) {
    Object.assign(this, init);
  }
}
