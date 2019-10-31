export class Translations {

  language: string;
  values: any;

  constructor(init?: Partial<Translations>) {
    Object.assign(this, init);
  }
}
