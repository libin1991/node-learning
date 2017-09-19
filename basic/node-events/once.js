const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

let myEmitter = new MyEmitter();

let count = 0;

myEmitter.once('event', () => {
    console.log(++count);
});

myEmitter.emit('event');
myEmitter.emit('event'); // 不会执行
