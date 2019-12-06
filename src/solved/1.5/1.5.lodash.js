const _ = require('lodash')
const data = require("./data.json");

const getAverageGradeIfEnrolledGreaterThanTwoOrEqual = (data) => (
    _.chain(data)
        .filter(v => v.enrolled >= 2)
        .map('grade')
        .mean()
        .value()
);

const average = getAverageGradeIfEnrolledGreaterThanTwoOrEqual(data);

console.log(average) // => 90