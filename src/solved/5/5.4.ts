import * as R from 'ramda';
import WrapperMonad from './monads/WrapperMonad';

const wrap = (val:any) => WrapperMonad.of(val);
console.log(
  R.compose(
    wrap, wrap,
    (n: number) => WrapperMonad.of(n),
  )(1).join(),
);
