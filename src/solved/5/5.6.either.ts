import * as R from 'ramda';
import Either from './monads/Either';

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

  return Either.fromNullable(result);
});

const safeFindStudent = safeFindObject(DB['student']);

console.log(safeFindStudent('1-1a').orElse(console.log));
