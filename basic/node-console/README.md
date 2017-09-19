# NodeJs 控制台console
`console`提供了一个简单的调试控制台，类似浏览器中的控制台。

## 使用全局的`console`

```
/**
 * 使用全局的`console`
 */
console.log('Hello World');

console.log(new Error('错啦……').message);

console.warn('警告你');
```

## 使用`Console`类

```
/**
 * 使用`Console`类
 */
const fs = require('fs');
const out = fs.createWriteStream('./stdout.log'); // 将信息写到stdout.log文件
const err = fs.createWriteStream('./stderr.log'); // 将信息写到stderr.log文件

const myConsole = new console.Console(out, err);

myConsole.log('Hi~');
myConsole.error(new Error('错了。。。').message);
myConsole.warn('警告');


```

## console.time()

```
const lable = '运行时长：';
console.time(lable);

setTimeout(console.timeEnd, 1000, lable); // 输出：运行时长：: 1001.320ms
```

## console.trace()

```
function show() {
    console.log(1);

    setTimeout(console.log, 2000, 2);
}

show();

console.trace('show');
// 输出形如：
// 1
// Trace: show
//     at Object.<anonymous> (C:\Users\ZX\Desktop\node\node-learning-note\basic\node-console\trace.js:9:9)
//     at Module._compile (module.js:570:32)
//     at Object.Module._extensions..js (module.js:579:10)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)
//     at Module.runMain (module.js:604:10)
//     at run (bootstrap_node.js:390:7)
//     at startup (bootstrap_node.js:150:9)
//     at bootstrap_node.js:505:3
// 2

```

## console.assert()

```
/**
 * 断言
 */
console.assert(true, '不干了');
console.log('生活还要继续！');

console.assert(false, 'Whoops 不干了'); // 会抛出AssertionError，所以下面的代码不会执行了
console.log('生活还能继续？');

```
