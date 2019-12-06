const Rx = require('rx');
const EventEmitter = require('events');

const MyEmitter = new EventEmitter();

const simulateKeyup = (value) => (
    MyEmitter.emit('keyup', {
        srcElement: {
            value
        }
    })
);

Rx.Observable.fromEvent(MyEmitter, 'keyup')
    .map(input => input.srcElement.value)
    .filter(text => text && text.includes('Hola'))
    .map(text => text.replace('Hola', 'Hello'))
    .skipWhile(text => text.length <= 5)
    .subscribe(
        result => console.log(`Resultado: ${result}`)
    )
    

simulateKeyup('Hola World!');
simulateKeyup('Skip');
simulateKeyup('Hola Programmer!');
