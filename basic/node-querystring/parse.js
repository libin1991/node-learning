/**
 * 查询参数解析
 */
const querystrig = require('querystring');
let str = 'author=zx&age=20';

let obj = querystrig.parse(str);
console.log(obj);
// 输出：
// { author: 'zx', age: '20' }
