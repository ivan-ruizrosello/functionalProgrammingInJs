const R = require('ramda');


// identity :: (a) -> a
// devuelve el input sin hacer nada.
console.log(R.identity('a')) // a

/*
 * tap :: (a -> *) -> a -> a
 *
 * Aplica la funcion al parametro 2 y devuelve el input.
 */
const obj = {
  a: 'a'
}

R.tap(console.log)(obj);


/**
 * Alternation (OR-combinator)
 */

const myAlt = (fn1, fn2) => {
  return (val) => {
    return fn1(val) || fn2(val);
  }
}

const alt = R.curry((fn1, fn2, val) => fn1(val) || fn2(val));

// Al ser false, hace el log
alt(R.identity, console.log)(false);


/**
 * Sequence (S-combinator)
 */

const seq = (...funcs) => {
  return (val) => {
    funcs.forEach(fn => fn(val));
  }
}

console.log(
  {
    res: R.tap(
      seq(console.log, console.warn)
    )(['a'])
  }
)


/**
 *  Fork (join) combinator
 */

const fork = (join, func1, func2) => {
  return (val) => {
    return join(func1(val), func2(val))
  }
}

const eqMedianAverage = fork(R.equals, R.median, R.mean);

console.log(
  eqMedianAverage([0, 5, 10]),
  eqMedianAverage([0, 1, 10])
);

