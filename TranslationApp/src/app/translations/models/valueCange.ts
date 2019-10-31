export class ValueChange {

  name: string;
  language: string;
  value: string;

  constructor(init?: Partial<ValueChange>) {
    Object.assign(this, init);
  }
}