const Tuple = require('../../Tuple')

const StringPair = Tuple(String, String);
const name = new StringPair('Barkley', 'Rosser');

[f, l] = name.values();

console.log({f, l})

// Throws an arity mismatch error
// const fullname = new StringPair('J', 'Barkley', 'Rosser');
