const RxJS = require('rxjs');
const Rx = require('rxjs/operators')
const EventEmitter = require('events');

const MyEmitter = new EventEmitter();
RxJS.fromEvent(MyEmitter, 'click')
    .pipe(
        Rx.map(event => event.srcElement.value),
        Rx.filter(text => text && text.includes('Hola')),
        Rx.map(text => text.replace('Hola', 'Hello')),
        Rx.skipWhile(text =>  text.length <= 5)
    ).subscribe(
        result => console.log(`Resultado: ${result}`)
    )

const simulateClick = (value) => (
    MyEmitter.emit('click', {
        srcElement: {
            value
        }
    })
);

simulateClick('Hola');              // =>
simulateClick('Hola World!');       // => Hello World!
simulateClick('Hola Programmer!');  // => Hello Programmer!
simulateClick('Hola');              // => Hello

