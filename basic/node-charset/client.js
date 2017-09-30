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
