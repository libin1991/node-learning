/**
 * 拼接字符串
 */
const querystring = require('querystring');

let obj1 = {
	"author": "zx",
	"age": "21"
};
let str1 = querystring.stringify(obj1);

console.log(str1);

let str2 = querystring.stringify(obj1, '|', '-');
console.log(str2);

// 输出：
// author=zx&age=21
// author-zx|age-21
