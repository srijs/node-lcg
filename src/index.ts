const M = Math.pow(2, 31) - 1;
const A = Math.pow(7, 5);
const Q = Math.floor(M / A);
const R = M % A;

function next(x: number): number {
  const res = (((x % Q) * A) | 0) - ((Math.floor(x / Q) * R) | 0);
  if (res < 0) {
    return res + M;
  }
  return res;
}

function rand(i: number): number {
  if (i === 0) {
    return 1;
  } else if (i % 2 === 0) {
    const r = rand(Math.floor(i / 2));
    return (r * r) | 0;
  } else {
    const r = rand(Math.floor(i / 2));
    return next((r * r) | 0);
  }
}

export class Random {
  private _value: number;

  constructor(seed: number) {
    this._value = next(seed);
  }

  next(): Random {
    return new Random(this._value);
  }

  split(): [Random, Random] {
    return [
      new Random(this._value),
      new Random(rand(this._value))
    ];
  }

  get(): number {
    return this._value / M;
  }

  getIntegerBetween(min: number, max: number) {
    return Math.floor((this._value / M) * (1 + max - min)) + min;
  }
}
