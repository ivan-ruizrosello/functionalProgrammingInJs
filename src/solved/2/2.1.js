const R = require('ramda');
const { Person, Student, Address } = require('../../base/Person');

const ivan = new Person('Ivan', 'Ruiz', '341-3-432-1');
ivan.address = new Address('ES');


const pablo = new Person('Pablo', 'Tolosa', '331-3-1432-8');
pablo.address = new Address('ES');

const noemi = new Student('Noemi', 'Planells', '65234-2345-34', 'Plablo Neruda');
noemi.address = new Address('US');

const isSameCountry = R.curry((person, people) => {
    return people.filter(p => {
        return p.address.country === person.address.country;
    })
})

const isSameCountryAsIvan = isSameCountry(ivan);

console.log(isSameCountryAsIvan([noemi]));