# node-http
Node.js提供了http模块，用于搭建HTTP服务端和客户端。

## 创建Web服务器
* server.js
```
/**
 * node-http 服务端
 */
let http = require('http');
let url = require('url');
let fs = require('fs');

// 创建服务器
let server = http.createServer((req, res) => {
	// 解析请求
	let pathname = url.parse(req.url).pathname; // 形如`/index.html`
	console.log('收到对文件 ' + pathname + '的请求');

	// 读取文件内容
	fs.readFile(pathname.substr(1), (err, data) => {
		if (err) {
			console.log('文件读取失败：' + err);

			// 设置404响应
			res.writeHead(404, {
				'Content-Type': 'text/html'
			});
		}
		else {
			// 状态码：200
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});

			// 响应文件内容
			res.write(data.toString());
		}

		// 发送响应
		res.end();
	});
});

server.listen(8081);

console.log('服务运行在：http://localhost:8081，请访问：http://localhost:8081/index.html');
```
* index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Node http</title>
</head>
<body>
	<h1>Hi~</h1>
</body>
</html>
```
运行`server.js`，打开浏览器访问。

## 创建客户端

* client.js
```
/**
 * node http 创建客户端
 */
let http = require('http');

// 请求选项
let options = {
	host: 'localhost',
	port: '8081',
	path: '/index.html'
};

// 处理响应的回调函数
let callback = (res) => {
	// 不断更新数据
	let body = '';

	res.on('data', (data) => {
		body += data;
	});

	res.on('end', () => {
		console.log('数据接收完成');
		console.log(body);
	});
}

// 向服务端发送请求
let req = http.request(options, callback);
req.end();
```
运行`server.js`，再运行`client.js`。