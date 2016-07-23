const M = 0x80000000;
const A = 1103515245;
const C = 12345;

export class Random {
  private _seed: number;

  constructor(seed: number) {
    this._seed = seed & 0x7fffffff;
  }

  next(): Random {
    return new Random((A * this._seed + C) % M);
  }

  get(): number {
    return this._seed / M;
  }
}
