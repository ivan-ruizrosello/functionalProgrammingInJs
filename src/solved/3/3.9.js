
const _ = require('lodash');
const R = require('ramda');

const { persons } = require('../../ExampleData');

_.mixin({
    'select': _.map,
    'from': _.chain,
    'where': _.filter,
    'groupBy': _.sortBy
});

console.log(
    _.from(persons)
        .where(p => p.birthYear > 1900 && p.address.country !== 'US')
        .groupBy(['firstname', 'birthYear'])
        .select('firstname', 'birthYear')
        .value()
)