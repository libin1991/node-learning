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
