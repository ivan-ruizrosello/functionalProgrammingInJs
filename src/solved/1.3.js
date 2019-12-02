const R = require('ramda');

const db = {
    students: {
        entities: {
            '1': {
                ssn: '1234-4321',
                firstname: 'Ivan',
                lastname: 'Ruiz',
            }
        },
        result: ['1'],
    },
}

const getOneStudentById = R.curry((students, id) => {
    const student = students.entities[id];
    
    return student;
});


const shallowJsonToCsv = (json) => {
    const keys = Object.keys(json);
    
    const concatCsvRow = R.join(',');
    const parseKeysRow = concatCsvRow;

    const getValByKey = R.curry((obj, key) => obj[key]);

    const parseDataRow = R.pipe(
        R.map(
            getValByKey(json)
        ),
        concatCsvRow,
    );

    const parseCsv = (_keys) => (
            R.pipe(
                parseDataRow,
                R.concat('\n'),
                R.concat(
                   parseKeysRow(_keys),
                ),
        )(_keys)
    );

    return parseCsv(keys);
}

const writeTextByElementId = R.curry((elementId, info) => {
   const element = document.querySelector(elementId);

   element.innerHTML = info;
})


const USER_ID = 1;
const printUserDataById = R.pipe(
    getOneStudentById(db.students),
    shallowJsonToCsv,
    console.log
);

printUserDataById(USER_ID);