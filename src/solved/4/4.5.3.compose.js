const R = require('ramda');

const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
const grades = [80, 100, 90, 99];

const smartestStudentCompose = R.compose(
  R.head,
  R.pluck(0),
  R.reverse,
  R.sortBy(
    R.prop(1)
  ),
  R.zip,
);

const smartestStudentPipe = R.pipe(
  R.zip,
  R.sortBy(
    R.prop(1)
  ),
  R.reverse,
  R.pluck(0),
  R.head
);

console.log(smartestStudentPipe(students, grades))
console.log(smartestStudentCompose(students, grades))
