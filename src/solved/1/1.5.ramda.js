const R = require('ramda');
const data = require("./1.5.data.json");

const getAverageGradeIfEnrolledGreaterThanTwoOrEqual = R.pipe(
    R.filter(v => v.enrolled >= 2),
    R.pluck('grade'),
    R.mean
)

const average = getAverageGradeIfEnrolledGreaterThanTwoOrEqual(data)

console.log(average); // => 90