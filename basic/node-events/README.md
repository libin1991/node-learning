# NodeJs 事件events
大多数Node.js核心API都采用异步事件驱动架构，其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器）。
所有能触发事件的对象都是`EventEmitter`类的实例。这些对象开放了一个`eventEmitter.on()`函数，允许在其上绑定一个或多个事件。

## 简单示例

```
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

```

## 给监听器传入参数与`this`
`eventEmitter.emit()`方法允许传任意参数给监听器函数。

```
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

```
## 异步与同步
`EventListener`会安照监听器注册的顺序同步调用所有监听器。可以使用`setImmediate()`或`process.nextTick()`来切换到异步操作模式。

```
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

// 输出：1 2 3
```

## 只触发一次
使用`eventEmitter.once()`方法可以注册一个对于特定事件只执行一次的监听器。当事件被触发时，先注销该监听器，然后再调用。

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

let myEmitter = new MyEmitter();

let count = 0;

myEmitter.once('event', () => {
    console.log(++count);
});

myEmitter.emit('event');
myEmitter.emit('event'); // 不会执行

```
