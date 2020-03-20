const R = require('ramda')

const names = ['alonzo church', 'Haskell curry', 'stephen_kleene',
'John Von Neumann', 'stephen_kleene'];

const isValid = (v) => R.not(R.isNil(v));
const toTitle = R.compose(
    R.join(''),
    R.over(
        R.lensIndex(0),
        R.toUpper,
    )
)

const getRes = R.pipe(
    R.filter(
        isValid,
    ),
    R.map(
        R.replace(/_/, ' ')
    ),
    R.uniq,
    R.map(toTitle),
    R.sort(
        R.comparator(R.gt)
    ),
);

console.log(getRes(names))
