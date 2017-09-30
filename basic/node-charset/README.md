# 字符编解码
在网络通信中，传输的都是二进制比特位，不管发送的是什么。

## 简单例子

	/**
	* 简单字符编码示例
	*/
	const iconv = require('iconv-lite');

	let text = '你好世界';

	let buff;

	buff = iconv.encode(text, 'utf8');
	console.log(buff);

	// 接下来尝试用不同解码输出
	console.log(iconv.decode(buff, 'gbk')); // 自然乱码
	console.log(iconv.decode(buff, 'utf8')); // 这样就Ok

## 服务端编解码例子

> server.js

	/**
	* 服务端编解码
	*/
	const http = require('http');
	const iconv = require('iconv-lite');

	let server = http.createServer((req, res) => {
		let chunks = [];

		req.on('data', (chunk) => {
			chunks.push(chunk);
		})

		req.on('end', () => {
			chunks = Buffer.concat(chunks);

			// 对二进制进行解码
			let body = iconv.decode(chunks, 'gbk');
			console.log(body);

			res.end("知道了");
		});
	}).listen(3000);

> client.js

	/**
	* 客户端
	*/
	const http = require('http');
	const iconv = require('iconv-lite');

	let charset = 'gbk';

	let reqBuff = iconv.encode('你好吗？我是客户端', charset);

	let options = {
		hostname: '127.0.0.1',
		port: '3000',
		path: '/',
		method: 'POST',
		headers: {
			'Content-Type': 'text/plain',
			'Content-Encoding': 'identity',
			'Charset': charset // 设置请求的字符集编码
		}
	};

	let client = http.request(options, (res) => {
		res.pipe(process.stdout);
	});

	client.end(reqBuff);

