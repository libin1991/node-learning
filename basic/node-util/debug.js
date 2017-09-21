/**
 * 调试
 */
const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);

// 输入：NODE_DEBUG=foo node debug.js
// 输出：FOO 11860: hello from foo [123]

