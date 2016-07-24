const M = 0x80000000;
const A = 1103515245;
const C = 12345;

export class Random {
  private _value: number;

  constructor(seed: number) {
    this._value = (A * (seed & 0x7fffffff) + C) % M;
  }

  next(): Random {
    return new Random(this._value);
  }

  get(): number {
    return this._value / M;
  }

  getIntegerBetween(min: number, max: number) {
    return Math.round((this._value / M) * (max - min)) + min;
  }
}
