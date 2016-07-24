# node-lcg
LCG (Linear congruential generator) Random Number Generator

## Installation

```
npm install lcg
```

## Usage

### Example

```js
import {Random} from 'lcg';

const seed = Math.random() * (1 << 32);

const random = new Random(seed);
const value = random.get();
const nextRandom = random.next();
const nextValue = nextRandom.get();
```

### API

#### `Random#get()`

Produces a real-valued random number x, where 0 <= x < 1.

#### `Random#getIntegerBetween(min, max)`

Produces an integer-valued random number x, where min <= x <= max.
