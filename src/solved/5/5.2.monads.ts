import * as R from 'ramda';
import Wrapper from './functors/WrapperFunctor';
import Empty from './functors/Empty';

const isEven = (n: number) => Number.isFinite(n) && (n % 2 === 0);
const half = (n: number) => isEven(n) ? Wrapper.wrap(n / 2) : new Empty();

console.log(
  half(4).flatMap(R.add(1000)),
  half(3),
);
