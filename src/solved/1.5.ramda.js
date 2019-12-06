const R = require('ramda');

const enrollment = [
    {enrolled: 2, grade: 100},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89},
];

const getAverageGradeIfEnrolledGreaterThanTwoOrEqual = R.pipe(
    R.filter(v => v.enrolled >= 2),
    R.pluck('grade'),
    R.mean
)

const average = getAverageGradeIfEnrolledGreaterThanTwoOrEqual(enrollment)

console.log(average); // => 90