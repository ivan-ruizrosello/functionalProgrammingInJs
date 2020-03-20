const R = require('ramda');

const arr = [1,2,3,4,5,6,7,8,9];

const sum = (arr) => {
    if(R.isEmpty(arr)){ 
        return 0;
    }

    return R.head(arr) + sum(R.tail(arr))
}

const sumTail = (arr, acc = 0) => {
    if(R.isEmpty(arr)) {
        return 0;
    }

    return sum(R.tail, acc + R.head(arr));
}


console.time('WARMUP')
console.log(sum(arr))
console.log(sumTail(arr))
console.timeEnd('WARMUP');


console.time('recursive')
console.log(sum(arr))
console.timeEnd('recursive');

console.time('recursive tail')
console.log(sum(arr))
console.timeEnd('recursive tail');
