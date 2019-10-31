export class Translation {

  name: string;
  value: string | Array<Translation>;

  constructor(init?: Partial<Translation>) {
    if (init) {
      this.name = init.name;
      if (init.value && (init.value instanceof Array)) {
        this.value = init.value.map(v => new Translation(v)); // make immutable
      } else {
        this.value = init.value;
      }
    }
  }
}
