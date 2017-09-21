# NodeJs 实用工具模块util

## debuglog(section)
* section：指定为应用的哪一部分创建`debuglog`函数
* 返回：<Function>日志函数
`util.debuglog()`用于创建一个函数，基于`NODE_DEBUG`环境变量的存在与否有条件地写入调试信息`stderr`。如果`section`名称存在于环境变量中，则返回的函数类似于`console.error()`。否则，返回一个空操作。
该方法可用于调试。通过`util.debuglog(fn)`来创建一个调试fn，这个fn只有在运行程序时声明`NODE_DEBUG=name`，才会打印调试信息。

```
/**
 * 调试
 */
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);

// 输入：NODE_DEBUG=foo node debug.js
// 输出：FOO 11860: hello from foo [123]
```

## deprecate(fn, str)
作废fn，但是仍可以调用，不过调用时会打印出`str`的警告信息。

```
/**
 * 将方法标识为作废
 */
const util = require('util');

let foo = () => {
    console.log('foo');
}

let foo2 = util.deprecate(foo, 'foo is deprecate');
foo2();

// 输出：
// foo
// (node:2028) DeprecationWarning: foo is deprecate

```

## format()
格式化打印
```
/**
 * 格式化输出
 */
const util = require('util');

console.log(util.format('hello %s', 'world')); // 输出：hello world

console.log(util.format('1 + 1 = %d', 2)); // 输出：1 + 1 = 2

console.log(util.format('info: %j', { nick: 'zx' })); // 输出：info: {"nick":"zx"}

console.log(util.format('%s is a boy', 'zx', '!')); // 输出：zx is a boy !

```

## inspect(obj[, options])
* obj：js原始值，或者对象
* options：配置参数，选项如下：
    - showHidden：如果是true的话，obj的非枚举属性也会被展示出来。默认是false
    - depth：如果obj是对象，那么，depth限制对象递归展示的层级，这对可读性有一定的好处，默认是2。如果设置为null，则不做限制
    - colors：自定义配色方案
    - maxArrayLength：如果obj是数组，那么限制最大可展示的数组个数。默认是100，如果设置为null，则不做限制。如果设置为0或负数，则一个都不展示
    - showProxy：如果为 true，则 Proxy 对象的对象和函数会展示它们的 target 和 handler 对象。 默认为 false

```
/**
 * 调试方法
 */
const util = require('util');

let obj = {}

Object.defineProperty(obj, 'nick', {
    enumerable: false,
    value: 'zx'
});

console.log(util.inspect(obj));

console.log(util.inspect(obj, {showHidden: true}));

```
