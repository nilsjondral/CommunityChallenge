export class Translation {

  name: string;
  value: string | Array<Translation>;

  constructor(init?: Partial<Translation>) {
    Object.assign(this, init);
  }
}
