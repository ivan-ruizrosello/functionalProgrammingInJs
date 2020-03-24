const R = require('ramda');

const findObject = R.curry((db, id) => {
  const obj = find(db, id);

  if(obj === null) {
    throw new Error(`Object with ID [${id}] not found.`);
  }

  return obj;
});

const findStudent = findObject(DB('students'))
