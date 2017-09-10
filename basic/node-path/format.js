/**
 * 格式化路径
 */
const path = require('path');

var path1 = path.format({ // linux系统形式
    root: '/node-path/',
    base: 'test.html'
});

// 输出：/node-path/test.html
console.log(path1);


var path2 = path.format({ // windows系统格式
    dir: '/node-path',
    name: 'test',
    ext: '.html'
});

// 输出：/node-path\test.html
console.log(path2);
