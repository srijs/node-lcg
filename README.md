# node-lcg
LCG (Linear congruential generator) Random Number Generator

## Installation

```
npm install lcg
```

## Usage

```js
import {Random} from 'lcg';

const seed = Math.random() * (1 << 32);

const random = new Random(seed);
const value = random.get();
const nextRandom = random.next();
const nextValue = nextRandom.get();
```
