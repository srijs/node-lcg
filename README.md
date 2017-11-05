# node-lcg
Seedable and splittable (LCG) Random Number Generator

A seedable linear congruential generator that supports splitting as
described in the paper "Distributed random number generation" by
F. Warren Burton and Rex L. Page.

## Installation

```
npm install lcg
```

## Usage

### Example

```js
import {Random} from 'lcg';

const seed = Math.random() * (Math.pow(2, 31) - 2);

const random = new Random(seed);
const value = random.get();
const nextRandom = random.next();
const nextValue = nextRandom.get();
```

### API

#### Building New Generators

##### `Random#next()`

Returns a new generator by perturbing the random state.

##### `Random#split()`

Returns an array of two new independent generators by splitting the random state.

#### Retrieving Values

##### `Random#get()`

Produces a real-valued random number x, where 0 <= x < 1.

##### `Random#getIntegerBetween(min, max)`

Produces an integer-valued random number x, where min <= x <= max.
