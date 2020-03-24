const R = require('ramda');

const runProgram = R.pipe(
  R.map(R.toLower),
  R.uniq,
  R.sortBy(
    R.identity
  ),
);


const res = runProgram([
  'Functional', 'Programming',
  'Curry', 'Memoization',
  'Partial', 'Curry', 'Programming'
]);

console.log(res)
