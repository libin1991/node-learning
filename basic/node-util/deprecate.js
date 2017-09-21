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
