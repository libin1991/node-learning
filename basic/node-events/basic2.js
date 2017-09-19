const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

let myEmitter = new MyEmitter();

myEmitter.on('event', function (a, b) {
    console.log(a, b, this);
});

myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});

myEmitter.emit('event', 1, 2);

// 输出：
// 1 2 MyEmitter {
//   domain: null,
//   _events: { event: [ [Function], [Function] ] },
//   _eventsCount: 1,
//   _maxListeners: undefined }
// 1 2 {}
