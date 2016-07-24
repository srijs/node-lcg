import {Random} from './index';

const seed = Math.floor(Math.random() * Math.pow(2, 31));

console.log('seed:', seed);

let random = new Random(seed);

function genPair(max: number): [number, number] {
  const nextRandom = random.next();
  const nextNextRandom = nextRandom.next();
  random = nextNextRandom;
  return [
    nextRandom.getIntegerBetween(0, max),
    nextNextRandom.getIntegerBetween(0, max)
  ];
}

function getAndCmpPair(max: number): boolean {
  const pair = genPair(max);
  return pair[0] === pair[1];
}

function getAndCmpPairs(max: number): void {
  const n = (1 + max) * 1000;
  let equals = 0;
  for (let i = 0; i < n; i++) {
    if (getAndCmpPair(max)) {
      equals++;
    }
  }
  console.log(`Generated ${n} pairs of numbers from 0 to ${max} -- ${equals} pairs contained equal numbers and we expected about 1000.`);
}

for (let i = 1; i < 15; i++) {
  getAndCmpPairs(i);
}
