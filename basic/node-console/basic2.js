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
