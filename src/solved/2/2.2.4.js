const R = require('ramda');
const { Person, Student, Address, ZipCode  } = require('../../base/Person');

const person = new Person('Ivan', 'Ruiz', '123-4213-5431');
const lastnameLens = R.lens(R.prop('lastname'), R.assoc('_lastname'));

console.log(R.view(lastnameLens, person));

const newPerson = R.set(lastnameLens, 'Hola', person);
console.log(newPerson, person);

person.address =  new Address(
    'US',
    'NJ', 
    'Princeton', 
    new ZipCode('08544','1234'),   
    'Alexander St.'
);

const zipPath = ['address', 'zip'];
// const zipLens = R.lens(R.path(zipPath), R.assoc('_address'));
const zipLens = R.lens(R.path(zipPath), R.assoc('_address'));
// const zipLens = R.lens(R.path(zipPath), R.assocPath(zipPath));
console.log(R.view(zipLens, person));

console.log(R.set(zipLens, new ZipCode('0101101', '02020202'), person));
