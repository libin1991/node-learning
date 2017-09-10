/**
 * 获取文件扩展名
 */
const path = require('path');

let file = 'test.html';

// 输出：.html
console.log(path.extname(file));
