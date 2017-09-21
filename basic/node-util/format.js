/**
 * 格式化输出
 */
const util = require('util');

console.log(util.format('hello %s', 'world')); // 输出：hello world

console.log(util.format('1 + 1 = %d', 2)); // 输出：1 + 1 = 2

console.log(util.format('info: %j', { nick: 'zx' })); // 输出：info: {"nick":"zx"}

console.log(util.format('%s is a boy', 'zx', '!')); // 输出：zx is a boy !
