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
