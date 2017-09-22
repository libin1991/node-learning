/**
 * url解析
 */
const url = require('url');

let str = 'https://github.com/mvpzx/note/tree/master/elemek?name=zx';

let obj1 = url.parse(str, true); // 对参数进行decode
console.log(obj1);

// 输出：
// Url {
// 	protocol: 'https:',
// 	slashes: true,
// 	auth: null,
// 	host: 'github.com',
// 	port: null,
// 	hostname: 'github.com',
// 	hash: null,
// 	search: '?name=zx',
// 	query: { name: 'zx' },
// 	pathname: '/mvpzx/note/tree/master/elemek',
// 	path: '/mvpzx/note/tree/master/elemek?name=zx',
// 	href: 'https://github.com/mvpzx/note/tree/master/elemek?name=zx' }


