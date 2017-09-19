const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

let myEmitter = new MyEmitter();

myEmitter.on('event', () => { // 监听事件
    console.log('触发了一个事件');
});

myEmitter.on('event', () => { // 监听事件
    console.log('我也监听到触发了一个事件');
});

myEmitter.emit('event'); // 触发事件
