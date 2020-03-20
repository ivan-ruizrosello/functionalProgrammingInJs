function negate (fn) { 
    return function () { 
        return !fn(...arguments);
    }
}

function isNull (val) {
    console.log({val})
    return val === null;
}

const isNotNull = negate(isNull);

console.log(isNotNull(null))
console.log(isNotNull({}))
