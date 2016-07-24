import {Random} from './index';

const seed = Math.floor(Math.random() * Math.pow(2, 31));

console.log('seed:', seed);

let random = new Random(seed);

function getBetween(min: number, max: number): number {
  random = random.next();
  return random.getIntegerBetween(min, max);
}

function genPair(max: number): [number, number] {
  return [
    getBetween(0, max),
    getBetween(0, max)
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

function rollDice() {
  const diceDist = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
  for (let i = 0; i < 1000; i++) {
    const outcome = getBetween(1, 6);
    diceDist[outcome]++;
  }
  console.log('rolling dice:', diceDist);
}

rollDice();
