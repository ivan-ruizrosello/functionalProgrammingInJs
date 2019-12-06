const _ = require('lodash')

const enrollment = [
    {enrolled: 2, grade: 100},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89}
];


const getAverageGradeIfEnrolledGreaterThanTwoOrEqual = (_enrollment) => (
    _.chain(_enrollment)
        .filter(v => v.enrolled >= 2)
        .map('grade')
        .mean()
        .value()
);

const average = getAverageGradeIfEnrolledGreaterThanTwoOrEqual(enrollment);

console.log(average) // => 90