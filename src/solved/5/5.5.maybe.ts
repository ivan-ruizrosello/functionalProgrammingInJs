
import * as R from 'ramda';
import Maybe from './monads/Maybe';

const DB = {
  student: {
    '1-1': {
      school: {
        address: {
          country: 'Spain',
        },
      },
    },
  },
};

const safeFindObject = R.curry((db, id) => {
  const result = db[id] || null;

  return Maybe.fromNullable(result);
});

const safeFindStudent = safeFindObject(DB['student']);

const getCountry = (student: Maybe) =>
  student
    .map(R.prop('school'))
    .map(R.prop('address'))
    .map(R.prop('country'))
    .getOrElse('Country does not exist!');

const country = R.compose(getCountry, safeFindStudent);

console.log(country('1-1')); // Spain
console.log(country('1-2')); // Country does not exist!

/**
 * Extra: Hacer todas las funciones seguras con "lift"
 */

const lift = R.curry((f, val) => {
  return Maybe.fromNullable(val).map(f);
});

const find = R.curry((db, id) =>  {
  return db[id];
});

const safeFind = R.compose(lift, find);
