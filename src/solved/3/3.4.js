const R = require('ramda');

const { persons } = require('../../ExampleData');


const countryPath = ['address', 'country'];
const countryLens = R.lens(R.path(countryPath), R.assocPath(countryPath));

const gatherStats = (stat, criteria) => {
    stat[criteria] = R.isNil(stat[criteria]) ? 1 : stat[criteria] + 1;
    return stat;
}

const countByCountry = R.pipe(
    R.map(
        R.view(countryLens)    
    ),
    R.reduce(gatherStats, {}),
);

const groupByCountry = R.groupBy(R.view(countryLens));

console.log(
    countByCountry(persons),
    groupByCountry(persons),
);
