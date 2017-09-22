/**
 * 查询参数解析
 */
const querystring = require('querystring');
let str = 'author-zx|age-21';

let obj = querystring.parse(str, '|', '-');
console.log(obj);

// 输出：
// { author: 'zx', age: '21' }
