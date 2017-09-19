const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

let myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
    setImmediate(() => { // 以此来异步
        console.log(3);
    });
});

myEmitter.on('event', (a, b) => {
    console.log(1);
});


myEmitter.emit('event');

console.log(2);
