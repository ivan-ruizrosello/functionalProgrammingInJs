const R = require('ramda');

const checkType = R.curry((typeDef, actualType) => {
  if(R.is(typeDef, actualType)) {
    return actualType;
  } else {
    throw new TypeError(`Type mismatch. Expected [${typeDef}] but found [${typeof actualType}]`);
  }
})


const Tuple = function(/* types */) {
  const typeInfo = Array.prototype.slice.call(arguments, 0);

  const _T = function (/* values */) {
    const values = Array.prototype.slice.call(arguments, 0);

    if(values.some(val => val === null || val === undefined)) {
      throw new ReferenceError('Tuples may not have any null values');
    }

    if(values.length !== typeInfo.length) {
      throw new TypeError('Tuple arity does not matchs its prototype');
    }

    values.map((val, i) => {
      this['_' + (i + 1)] = checkType(typeInfo[i])(val);
    }, this);

    Object.freeze(this);
  }

  _T.prototype.values = function() {
    return Object.keys(this).map(k => {
      return this[k];
    }, this)
  }

  return _T;
}

module.exports = Tuple;
