const { persons } = require('../../ExampleData')

const R = require('ramda')

const result = R.pipe(
    R.reverse,
    R.map(
        p => !R.isNil(p) ? p.lastname : ''
    )
);

console.log(result(persons));