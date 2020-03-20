const R = require('ramda');

const { persons } = require('../../ExampleData');

const countryStats = R.reduce(
    (stat, person) => {
        const country = person.address.country;
        stat[country] = R.isNil(stat[country]) ? 1 : stat[country] + 1;
        return stat;
    },
    {}
);

console.log(countryStats(persons));