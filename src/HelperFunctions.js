const R = require('ramda');
const _ = require('lodash');

const trim = (str) => str.replace(/^\s*|\s*$/g, '');

const normalize = (str) => str.replace(/\-/g, '');

const validLength = (param, str) => str.length === param;

const checkLengthSsn = _.partial(validLength, 9);

const cleanInput = R.compose(normalize, trim);
const isValidSsn = R.compose(checkLengthSsn, cleanInput);


console.log(cleanInput(' 444-44-4444 '), isValidSsn(' 444-44-4444 '))
