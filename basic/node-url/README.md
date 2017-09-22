# NodeJs 网址url
首先理解下URLR。
![url图解](http://ownsprds9.bkt.clouddn.com/url.png)

## 不解析参数值
```
/**
 * url解析
 */
const url = require('url');

let str = 'https://github.com/mvpzx/note/tree/master/elemek#htm5?name=zx';

let obj1 = url.parse(str);
console.log(obj1);

// 输出：
// Url {
// 	protocol: 'https:',
// 	slashes: true,
// 	auth: null,
// 	host: 'github.com',
// 	port: null,
// 	hostname: 'github.com',
// 	hash: '#htm5?name=zx',
// 	search: null,
// 	query: null,
// 	pathname: '/mvpzx/note/tree/master/elemek',
// 	path: '/mvpzx/note/tree/master/elemek',
// 	href: 'https://github.com/mvpzx/note/tree/master/elemek#htm5?name=zx' }

```

## decode参数
```
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
```
